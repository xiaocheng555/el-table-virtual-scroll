<template>
  <div>
    <el-alert type="warning" title="多选支持reserve-selection (>=1.3.0版本) " show-icon></el-alert>
    <virtual-scroll
      v-show="show"
      ref="virtualScroll"
      :data="list"
      :item-size="62"
      key-prop="id"
      @change="(virtualList) => tableData = virtualList">
      <el-table
        ref="table"
        :data="tableData"
        height="500"
        row-key="id"
        tooltip-effect="dark"
        style="width: 100%"
        :highlight-selection-row="highlight"
        @select="onSelect"
        @select-all="onSelectAll"
        @selection-change="handleSelectionChange">
        <!-- 多选 -->
        <virtual-column width="60" type="selection" :selectable="getSelectable" reserve-selection></virtual-column>
        <el-table-column
          label="id"
          prop="id"
          width="120">
        </el-table-column>
        <el-table-column
          label="日期"
          width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作" width="260">
          <template slot-scope="{ row }">
            <el-button @click="onDel(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </virtual-scroll>
    <el-pagination
      layout="prev, pager, next"
      :total="pageTotal"
      :current-page.sync="currentPage"
      @current-change="onCurrentChange">
    </el-pagination>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection()">取消选择</el-button>
      <el-button @click="toggleSelection(multipleSelection[0])">取消选择1个</el-button>
      <el-button @click="toggleSelection(multipleSelection.slice(0, 2))">取消选择2个</el-button>
      <el-button @click="toggleAllSelection()">toggleAllSelection</el-button>
      <el-button @click="onCurrentChange()">刷新</el-button>
      <el-button @click="show = !show">show</el-button>
      <span style="margin-left: 10px;">选中高亮: <el-switch v-model="highlight"></el-switch></span>
    </div>
  </div>
</template>

<script>
import VirtualScroll, { VirtualColumn } from 'el-table-virtual-scroll'
import { mockData } from '@/utils'

export default {
  components: {
    VirtualScroll,
    VirtualColumn
  },
  data () {
    return {
      list: [],
      tableData: [],
      multipleSelection: [],
      show: true,
      highlight: false,
      pageTotal: 200,
      currentPage: 1
    }
  },
  methods: {
    onCurrentChange () {
      const start = (this.currentPage - 1) * this.pageTotal
      this.list = mockData(start, start + this.pageTotal)
    },
    getSelectable (row) {
      return row.id > 2
    },
    toggleSelection (rows) {
      if (rows) {
        this.$refs.table.toggleRowSelection(rows)
      } else {
        this.$refs.table.clearSelection()
      }
    },
    handleSelectionChange (val) {
      console.log('multipleSelection', val)
      this.multipleSelection = val
    },
    onSelect (selection, row, checked) {
      console.log('select:', selection, row, checked)
    },
    onSelectAll (selection, checked) {
      console.log('select-all:', selection, checked)
    },
    onDel (row) {
      const index = this.list.findIndex(item => item === row)
      if (index > -1) {
        this.list.splice(index, 1)
      }
      // 需要手动移除选项
      this.$refs.table.toggleRowSelection(row, false)
    },
    toggleAllSelection () {
      this.$refs.table.toggleAllSelection()
    }
  },
  created () {
    this.onCurrentChange()
  }
}
</script>

<style lang='less' scoped>

</style>
