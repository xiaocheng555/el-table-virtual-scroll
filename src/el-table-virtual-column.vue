<template>
  <el-table-column
    v-bind="$attrs"
    v-on="$listeners"
    :class-name="getClassName">
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
    <!-- 列嵌套 -->
    <template v-if="isNested">
      <slot></slot>
    </template>
    <!-- 列内容 -->
    <template slot-scope="scope">
      <!-- v-tree类型 -->
      <template v-if="scope.column && scope.column.type === 'v-tree'">
        <span class="el-table__indent" :style="{ paddingLeft: `${(scope.row.$v_level - 1) * indent}px` }"></span>
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
          @click.native.stop
          v-if="scope.column.type === 'v-selection'"
          :value="scope.row.$v_checked || false"
          :disabled="getDisabled(scope)"
          @change="onCheckRow(scope, !scope.row.$v_checked)">
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
        <!-- 有formatter参数的情况 -->
        <template v-else-if="scope.column.formatter">
          <!-- formatter结果为VNode的情况 -->
          <el-table-virtual-column-formatter
            v-if="isVNode(getFormatterResult(scope))"
            :v-node="getFormatterResult(scope)"
          />
          <!-- formatter结果为String的情况 -->
          <template v-else>{{ getFormatterResult(scope) }}</template>
        </template>
        <template v-else>
          {{scope.row[scope.column.property]}}
        </template>
      </template>
    </template>
  </el-table-column>
</template>

<script>
import {
  TableColumn,
  Checkbox,
  Radio
} from 'element-ui'
import ElTableVirtualColumnFormatter from './el-table-virtual-column-formatter.vue'

// 用于获取formatter结果的临时对象，不可挂载到vue实例中，否则会导致循环更新的问题
const formatterTempObj = {
  scope: null, // 缓存键 当前scope参数
  result: null // 缓存值 formatter的调用结果
}

export default {
  name: 'el-table-virtual-column',
  components: {
    ElCheckbox: Checkbox,
    ElRadio: Radio,
    ElTableVirtualColumnFormatter
  },
  inject: ['virtualScroll'],
  props: {
    load: {
      type: Function
    },
    indent: {
      type: Number,
      default: 16
    },
    selectable: {
      type: Function
    }
  },
  data () {
    return {
      isCheckedAll: false, // 全选
      isCheckedImn: false, // 控制半选样式
      isTree: false, // 树结构
      isNested: false // 是否列嵌套
    }
  },
  computed: {
    getClassName () {
      const classnames = []
      const classname = this.$attrs['class-name'] || this.$attrs.className
      classname && classnames.push(classname)
      this.isTree && classnames.push('el-table__row--level')
      let vfixed = this.$attrs.vfixed
      if (vfixed === true || vfixed === '') vfixed = 'left'
      if (vfixed) classnames.push('virtual-column__fixed-' + vfixed)
      return classnames.join(' ')
    }
  },
  methods: {
    // 获取多选禁用状态
    getDisabled (scope) {
      if (this.selectable) {
        const index = this.getIndex(scope, false)
        return !this.selectable(scope.row, index)
      }
      return false
    },
    // 选择表格所有行
    onCheckAllRows (val) {
      val = this.isCheckedImn ? true : val
      if (this.selectable) {
        const list = this.virtualScroll.getData()
        // 筛选出可选的行
        const selectableList = []
        let hasUnselectableChecked = false // 是否不可选择的行已经勾选了
        list.forEach((row, index) => {
          const isSelectable = this.selectable(row, index)
          if (isSelectable) {
            selectableList.push(row)
          } else {
            if (row.$v_checked) hasUnselectableChecked = true
          }
        })
        this.virtualScroll.checkAll(val, selectableList, true)
        this.isCheckedAll = val
        // 如果有不可选择的行已经勾选了，此时取消全选，选择框需要设置为半选状态
        if (hasUnselectableChecked && !val) {
          this.isCheckedImn = true
        } else {
          this.isCheckedImn = false
        }
        return
      }

      this.virtualScroll.checkAll(val)
      this.isCheckedAll = val
      this.isCheckedImn = false
    },
    // 选择表格某行
    onCheckRow (scope, val) {
      const index = this.getIndex(scope, false)
      if (this.selectable) {
        const isSelectable = this.selectable(scope.row, index)
        if (!isSelectable) return
      }

      this.virtualScroll.checkRow(scope.row, val, true, true)
      this.syncCheckStatus()
    },
    // 是否自定义多选
    isSelection () {
      return this.$attrs.type !== 'v-selection'
    },
    // 同步全选、半选框状态
    syncCheckStatus () {
      const list = this.virtualScroll.getData()
      const checkedLen = list.filter(row => row.$v_checked === true).length

      // 计算可选行的长度
      let selectableLen
      let selectableCheckedLen
      if (this.selectable) {
        const selectableList = list.filter((row, index) => this.selectable(row, index))
        selectableCheckedLen = selectableList.filter(row => row.$v_checked === true).length
        selectableLen = selectableList.length
      }

      if (checkedLen === 0) {
        this.isCheckedAll = false
        this.isCheckedImn = false
      } else if (this.selectable && selectableCheckedLen === selectableLen) {
        this.isCheckedAll = true
        this.isCheckedImn = false
      } else if (checkedLen === list.length) {
        this.isCheckedAll = true
        this.isCheckedImn = false
      } else {
        this.isCheckedAll = false
        this.isCheckedImn = true
      }
    },
    // 单选
    onRadioChange (row) {
      this.virtualScroll.setCurrentRow(row)
    },
    // 获取索引值; add1 - 是否加1
    getIndex (scope, add1 = true) {
      const index = this.virtualScroll.start + scope.$index
      if (typeof this.$attrs.index === 'function') {
        return this.$attrs.index(index)
      }
      return index + (add1 ? 1 : 0)
    },
    // 展开收起事件，返回子节点
    async onTreeNodeExpand (row, expanded = !row.$v_expanded, doLoad = true) {
      if (row.$v_expanded === expanded) return []

      if (expanded) {
        // 如果已经加载，则显示隐藏的字节点
        if (row.$v_loaded) {
          return this.loadOldChildNodes(row)
        } else if (doLoad) {
          return this.loadChildNodes(row)
        }
      } else {
        return this.hideChildNodes(row)
      }
    },
    // 加载子节点
    loadChildNodes (row) {
      return new Promise((resolve, reject) => {
        // 获取子节点数据并显示
        this.$set(row, '$v_loading', true)
        this.$set(row, '$v_hasChildren', true)

        this.load && this.load(row, resolveFn.bind(this))

        function resolveFn (data) {
          if (!Array.isArray(data)) {
            this.$set(row, '$v_loading', false)
            resolve()
            return
          }

          this.$set(row, '$v_loading', false)
          this.$set(row, '$v_expanded', true)
          this.$set(row, '$v_loaded', true)
          this.$set(row, '$v_hasChildren', !!data.length)
          data.forEach(item => {
            item.$v_level = typeof row.$v_level === 'number' ? row.$v_level + 1 : 2
          })
          // 所有子节点插入到当前同级节点下
          const list = this.virtualScroll.getData()
          const index = list.findIndex(item => item === row)
          if (index > -1) {
            this.virtualScroll.updateData([
              ...list.slice(0, index + 1),
              ...data,
              ...list.slice(index + 1)
            ])
          }
          resolve(data)
        }
      })
    },
    // 加载已经加载的子节点
    loadOldChildNodes (row) {
      this.$set(row, '$v_expanded', true)
      const list = this.virtualScroll.getData()
      const index = list.findIndex(item => item === row)
      if (index > -1) {
        this.virtualScroll.updateData([
          ...list.slice(0, index + 1),
          ...(row.$v_hideNodes || []),
          ...list.slice(index + 1)
        ])
        const hideNodes = row.$v_hideNodes
        delete row.$v_hideNodes
        return hideNodes
      }
      return []
    },
    // 隐藏子节点
    hideChildNodes (row) {
      this.$set(row, '$v_expanded', false)

      // 查找所有子孙节点
      const { getData, keyProp } = this.virtualScroll
      const list = getData()
      const childNodes = this.getChildNodes(row, true, true)
      if (!childNodes.length) return

      const map = {}
      childNodes.forEach(row => {
        map[row[keyProp]] = true
      })

      // 隐藏所有子孙节点
      this.$set(row, '$v_hideNodes', childNodes)
      const newList = list.filter(row => !(row[keyProp] in map))
      this.virtualScroll.updateData(newList)
      this.virtualScroll.update()
      return []
    },
    // 展开节点
    // expandKeys - 展开节点的keys值
    // expanded - 展开/收起
    // doLoad - 未加载子节点则执行load函数去加载，已加载则展开
    expand (expandKeys, expanded = true, doLoad = true) {
      if (!Array.isArray(expandKeys)) return

      const { getData, keyProp } = this.virtualScroll
      const data = getData()
      const plist = []
      data.forEach((row) => {
        if (row[keyProp] && expandKeys.includes(row[keyProp])) {
          plist.push(this.onTreeNodeExpand(row, expanded, doLoad))
        }
      })
      return Promise.all(plist)
    },
    // 展开路径
    expandPath (keyPath) {
      if (!Array.isArray(keyPath)) return

      // 递归路径，逐层展开节点
      const expand = async (rows, n) => {
        if (n === keyPath.length) return keyPath[n - 1]
        if (!Array.isArray(rows) || !rows.length) return keyPath[n - 1]
        const targetRow = rows.find(row => row[keyProp] === keyPath[n])
        if (targetRow) {
          if (!targetRow.$v_expanded) {
            rows = await this.onTreeNodeExpand(targetRow, true)
          }
          return expand(rows, n + 1)
        } else {
          console.warn(`[expandPath] 没有找到 ${keyPath[n]} key值对应的行`)
          return keyPath[n - 1] // 返回上一个key值
        }
      }
      const { getData, keyProp } = this.virtualScroll
      const data = getData()
      return expand(data, 0)
    },
    // 展开所有存在的节点
    expandAll () {
      // 展开节点（递归）
      const expandRows = (data) => {
        if (Array.isArray(data) && data.length) {
          data.forEach((row) => {
            this.onTreeNodeExpand(row, true, false)
            expandRows(row.$v_hideNodes)
          })
        }
      }

      const { getData } = this.virtualScroll
      const data = getData()
      expandRows(data)
    },
    // 收起所有节点
    unexpandAll () {
      const { getData } = this.virtualScroll
      const data = getData()
      const levelMap = []
      data.forEach(row => {
        const level = row.$v_level || 1
        !levelMap[level] && (levelMap[level] = [])
        levelMap[level].push(row)
      })
      for (let i = levelMap.length - 1; i >= 0; i--) {
        if (!levelMap[i]) continue
        levelMap[i].forEach(row => {
          this.onTreeNodeExpand(row, false)
        })
      }
    },
    // 删除节点
    // onlyChild：为false是删除传入的row节点，为 true 时只删除row的所有子节点
    removeNode (row, onlyChild = false) {
      // 没有子节点，无需删除
      if (onlyChild && !row.$v_hasChildren) return

      const { getData } = this.virtualScroll
      const list = getData().slice()
      const targetLevel = row.$v_level || 1

      // 查找子节点
      // match - 是否找到目标节点
      function find (list, data = { match: false, stop: false }) {
        for (let i = 0; i < list.length; i++) {
          if (data.stop) return

          const curRow = list[i]
          const curLevel = curRow.$v_level || 1
          const isChild = curLevel > targetLevel

          // 找到子节点，并删除
          if (data.match && isChild) {
            list.splice(i, 1)
            i--
            continue
          }
          // 已经找完子节点，结束
          if (data.match && !isChild) return (data.stop = true)
          // 找到目标节点后，开始查找它的子节点
          if (curRow === row) {
            // 直接删除目标节点，并结束(不需查询子节点)
            if (!onlyChild) {
              list.splice(i, 1)
              data.stop = true
              return
            }
            // 往下允许查找它的子节点
            data.match = true
          }

          // 如果子节点隐藏了，则从隐藏节点里查找
          const hideNodes = curRow.$v_hideNodes || []
          if (hideNodes.length) {
            find(hideNodes, data, true)
          }
        }
      }

      find(list)
      if (onlyChild) row.$v_hasChildren = false
      this.virtualScroll.updateData(list)
    },
    // 重新加载节点
    // 删除原来子节点，并触发load函数重新加载
    reloadNode (row) {
      this.removeNode(row, true)
      this.loadChildNodes(row)
    },
    /*
     * 获取子孙节点
     * soon - 是否获取所有子孙节点，否则只获取直属子节点
     * visible - 只获取可见的
     */
    getChildNodes (row, soon = true, visible = false) {
      const res = []
      const { getData } = this.virtualScroll
      const list = getData()
      const targetLevel = row.$v_level || 1

      // 查找子节点
      // match - 是否找到目标节点
      function find (list, data = { match: false, stop: false }) {
        for (let i = 0; i < list.length; i++) {
          if (data.stop) return

          const curRow = list[i]
          const curLevel = curRow.$v_level || 1
          const isChild = soon ? curLevel > targetLevel : curLevel - targetLevel === 1

          // 找到子节点
          if (data.match && isChild) {
            res.push(curRow)
          }
          // 已经找完子节点，结束
          if (data.match && !isChild) return (data.stop = true)
          // 找到目标节点后，开始查找它的子节点
          if (curRow === row) data.match = true

          // 如果子节点隐藏了，则从隐藏节点里查找
          const hideNodes = curRow.$v_hideNodes || []
          if (!visible && hideNodes.length) {
            find(hideNodes, data)
          }
        }
      }

      find(list)

      return res
    },

    // 获取父节点
    getParentNodes (row) {
      const { getData } = this.virtualScroll
      const list = getData().slice()
      const res = []

      // 查找方案：从父节点向子节点一级一级查找，并记录查找路径，找到目标节点后，返回路径上的所有节点
      function find (list, data = { stop: false }, level = 1) {
        for (let i = 0; i < list.length; i++) {
          if (data.stop) return

          const curRow = list[i]
          const curLevel = curRow.$v_level || 1

          if (curLevel > level) {
            level = curLevel
          } else {
            // 层级与数组的索引有关联的，相差1
            res.splice(curLevel - 1)
          }

          // 找到目标节点后，停止
          if (curRow === row) {
            data.stop = true
            return
          }
          // 添加当前节点
          res.push(curRow)

          // 如果子节点隐藏了，则从隐藏节点里查找
          const hideNodes = curRow.$v_hideNodes || []
          if (hideNodes.length) {
            find(hideNodes, data, level)
          }
        }
      }

      find(list)
      return res
    },
    // 获取所有节点，包含隐藏的节点
    getAllNodes () {
      const { getData } = this.virtualScroll
      const list = getData()
      const res = []
      list.forEach(item => {
        res.push(item)
        if (item.$v_hideNodes && item.$v_hideNodes.length) {
          res.push(...item.$v_hideNodes)
        }
      })
      return res
    },
    // 判断内容是否为VNode
    isVNode (vNode) {
      return this._vnode.constructor === vNode?.constructor
    },
    // 获取formatter结果，相同的scope使用缓存的结果，避免重复调用formatter函数
    // 当前与formatter有关的template的写法会使同一个scope参数被formatter连续使用两次
    // 后续的formatter调用参数都是一个全新的scope对象
    // 因此，只需判断当前scope与上一个scope是否相同即可决定是否需要使用缓存
    getFormatterResult (scope) {
      if (formatterTempObj.scope === scope) {
        // 获取缓存的formatter调用结果
        return formatterTempObj.result
      } else {
        // scope不匹配，更新缓存键scope与值result
        formatterTempObj.scope = scope
        formatterTempObj.result = scope.column.formatter(scope.row, scope.column, scope.row[scope.column.property], scope.$index)
        return formatterTempObj.result
      }
    }
  },
  beforeCreate () {
    const globalComponents = this.$root.$options.components
    // 当全局有引入ElTableColumn，就不用局部再引入了(修复Duplicate keys detected: 'el-table_1_column_1'. This may cause an update error. #63)
    if (!globalComponents.ElTableColumn) {
      this.$options.components.ElTableColumn = TableColumn
    }

    const { type } = this.$attrs
    if (['index', 'selection', 'radio', 'tree'].includes(type)) {
      this.$attrs.type = 'v-' + type
    }
  },
  created () {
    this.isNested = !!this.$slots.default // 是否列嵌套
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
    // 清除formatter相关的缓存
    formatterTempObj.scope = null
    formatterTempObj.result = null
  }
}
</script>

<style lang='less'>
.el-table-virtual-scroll {
  .virtual-column__fixed-left,
  .virtual-column__fixed-right {
    position: sticky !important;
    z-index: 2 !important;
    background: #fff;
  }
  &.is-scrolling-left {
    .is-last-column {
      &:before {
        box-shadow: none;
      }
    }
  }
  &.is-scrolling-right,
  &.is-scrolling-middle {
    .is-last-column {
      border-right: none;
    }
  }

  &.is-scrolling-right {
    .is-first-column {
      &:before {
        box-shadow: none;
      }
    }
  }
  &.is-scrolling-left,
  &.is-scrolling-middle {
    .is-first-column {
      border-left: none;
    }
  }
  .is-last-column,
  .is-first-column {
    overflow: visible !important;

    &:before {
      content: "";
      position: absolute;
      top: 0px;
      width: 10px;
      bottom: -1px;
      overflow-x: hidden;
      overflow-y: hidden;
      touch-action: none;
      pointer-events: none;
    }
  }
  .is-last-column {
    &:before {
      right: -10px;
      box-shadow: inset 10px 0 10px -10px rgba(0, 0, 0, .12);
    }
  }
  .is-first-column {
    &:before {
      left: -10px;
      box-shadow: inset -10px 0 10px -10px rgba(0, 0, 0, .12);
    }
  }
  &.is-scrolling-none {
    .is-last-column,
    .is-first-column {
      &:before {
        content: none;
      }
    }
  }
}
</style>
