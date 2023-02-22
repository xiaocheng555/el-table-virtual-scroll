<template>
  <el-table-column
    v-bind="$attrs"
    v-on="$listeners"
    :class-name="isTree ? 'el-table__row--level' : ''">
    <!-- 列头部 -->
    <template slot="header" slot-scope="scope">
      <slot v-if="$scopedSlots['header']" name="header" v-bind="scope"></slot>
      <template v-else>
        <!-- 多选类型-全选 -->
        <el-checkbox
          v-if="scope.column.type === 'v-selection'"
          v-model="isCheckedAll"
          :indeterminate="isCheckedImn"
          @change="onCheckAllRows">
        </el-checkbox>
        <template v-else>
          {{scope.column.label}}
        </template>
      </template>
    </template>
    <!-- 列内容 -->
    <template slot-scope="scope">
      <!-- v-tree类型 -->
      <template v-if="scope.column && scope.column.type === 'v-tree'">
        <span class="el-table__indent" :style="{ paddingLeft: `${(scope.row.$level - 1) * indent}px` }"></span>
        <div
          v-if="(scope.row.$v_hasChildren !== false)"
          class="el-table__expand-icon"
          :class="scope.row.$v_expanded ? 'el-table__expand-icon--expanded' : ''"
          @click="onTreeNodeExpand(scope.row)">
          <i class="el-icon-loading" v-if="scope.row.$v_loading"></i>
          <i class="el-icon-arrow-right" v-else></i>
        </div>
        <span v-else class="el-table__placeholder"></span>
      </template>
      <slot v-if="$scopedSlots['default']" v-bind="scope"></slot>
      <template v-else>
        <!-- 多选类型 -->
        <el-checkbox
          v-if="scope.column.type === 'v-selection'"
          :value="scope.row.$v_checked"
          @change="onCheckRow(scope.row, !scope.row.$v_checked)">
        </el-checkbox>
        <!-- 单选类型 -->
        <el-radio
          v-if="scope.column.type === 'v-radio'"
          :label="true"
          :value="virtualScroll.curRow === scope.row"
          @change="onRadioChange(scope.row)">
          <span></span>
        </el-radio>
        <!-- v-index类型 -->
        <span v-else-if="scope.column.type === 'v-index'">
          {{getIndex(scope)}}
        </span>
        <template v-else>
          {{scope.row[scope.column.property]}}
        </template>
      </template>
    </template>
  </el-table-column>
</template>

<script>
import {
  TableColumn as ElTableColumn,
  Checkbox as ElCheckbox,
  Radio as ElRadio
} from 'element-ui'

export default {
  name: 'el-table-virtual-column',
  components: {
    ElTableColumn,
    ElCheckbox,
    ElRadio
  },
  inject: ['virtualScroll'],
  props: {
    load: {
      type: Function
    },
    indent: {
      type: Number,
      default: 16
    }
  },
  data () {
    return {
      isCheckedAll: false, // 全选
      isCheckedImn: false, // 控制半选样式
      isTree: false
    }
  },
  methods: {
    // 选择表格所有行
    onCheckAllRows (val) {
      val = this.isCheckedImn ? true : val
      this.virtualScroll.checkAll(val)
      this.isCheckedAll = val
      this.isCheckedImn = false
    },
    // 选择表格某行
    onCheckRow (row, val) {
      this.virtualScroll.checkRow(row, val)
      this.syncCheckStatus()
    },
    // 同步全选、半选框状态
    syncCheckStatus () {
      const list = this.virtualScroll.data
      const checkedLen = list.filter(row => row.$v_checked === true).length
      if (checkedLen === 0) {
        this.isCheckedAll = false
        this.isCheckedImn = false
      } else if (checkedLen === list.length) {
        this.isCheckedAll = true
        this.isCheckedImn = false
      } else {
        this.isCheckedAll = false
        this.isCheckedImn = true
      }
    },
    onRadioChange (row) {
      this.virtualScroll.setCurrentRow(row)
    },
    // 获取索引值
    getIndex (scope) {
      const index = this.virtualScroll.start + scope.$index
      if (typeof this.$attrs.index === 'function') {
        return this.$attrs.index(index)
      }
      return index + 1
    },
    // 展开收起事件
    onTreeNodeExpand (row) {
      this.$set(row, '$v_expanded', !row.$v_expanded)
      if (row.$v_expanded) {
        this.loadChildNodes(row)
      } else {
        this.hideChildNodes(row)
      }
    },
    // 加载子节点
    loadChildNodes (row) {
      // 如果已经加载，则显示隐藏的字节点
      if (row.$v_loaded) {
        const list = this.virtualScroll.data
        const index = list.findIndex(item => item === row)
        if (index > -1) {
          this.virtualScroll.updateData([
            ...list.slice(0, index + 1),
            ...row.$v_hideNodes,
            ...list.slice(index + 1)
          ])
        }
        return
      }

      // 获取子节点数据并显示
      this.$set(row, '$v_loading', true)
      this.load && this.load(row, resolve.bind(this))

      function resolve (data) {
        if (Array.isArray(!data)) data = []

        this.$set(row, '$v_loading', false)
        this.$set(row, '$v_loaded', true)
        this.$set(row, '$v_hasChildren', !!data.length)
        data.forEach(item => {
          item.$level = typeof row.$level === 'number' ? row.$level + 1 : 2
        })
        // 所有子节点插入到当前同级节点下
        const list = this.virtualScroll.data
        const index = list.findIndex(item => item === row)
        if (index > -1) {
          this.virtualScroll.updateData([
            ...list.slice(0, index + 1),
            ...data,
            ...list.slice(index + 1)
          ])
        }
      }
    },
    // 隐藏子节点
    hideChildNodes (row) {
      const list = this.virtualScroll.data
      const index = list.findIndex(item => item === row)
      if (index === -1) return

      // 查找当前节点的所有子孙节点
      const hideNodes = []
      for (let i = index + 1; i < list.length; i++) {
        const curRow = list[i]
        if ((curRow.$level || 1) <= (row.$level || 1)) break
        hideNodes.push(curRow)
      }
      this.$set(row, '$v_hideNodes', hideNodes)
      // 隐藏所有子孙节点
      const newList = list.filter(item => !hideNodes.includes(item))
      this.virtualScroll.updateData(newList)
      this.virtualScroll.update()
    }
  },
  beforeCreate () {
    const { type } = this.$attrs
    if (['index', 'selection', 'radio', 'tree'].includes(type)) {
      this.$attrs.type = 'v-' + type
    }
  },
  created () {
    this.virtualScroll.addColumn(this)

    const { type } = this.$attrs
    if (type === 'expand') {
      this.virtualScroll.isExpandType = true
    } else if (type === 'v-tree') {
      this.isTree = true
    }
  },
  beforeDestroy () {
    this.virtualScroll.removeColumn(this)
  }
}
</script>

<style lang='less' scoped>
</style>
