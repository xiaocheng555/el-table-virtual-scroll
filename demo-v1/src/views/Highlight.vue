<template>
  <div>
    <el-alert type="info" title='版本>=1.0.26支持' show-icon></el-alert>
    <div style="margin-top: 20px">
      <el-button @click="setCheckedRow(list[1])">选中第二行</el-button>
      <el-button @click="setCheckedRow()">取消选择</el-button>
    </div>
    <virtual-scroll
      ref="virtualScroll"
      :data="list"
      :item-size="62"
      key-prop="id"
      @change="(virtualList) => tableData = virtualList">
      <el-table
        ref="tableRef"
        :data="tableData"
        height="500"
        row-key="id"
        :currentRowKey="currentRowKey"
        tooltip-effect="dark"
        highlight-current-row
        style="width: 100%"
        @current-change="handleCurrentChange">
        <el-table-column label="id" prop="id" width="120"></el-table-column>
        <el-table-column label="日期" width="180">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </virtual-scroll>
  </div>
</template>

<script>
import VirtualScroll from 'el-table-virtual-scroll'
import { mockData } from '@/utils'

export default {
  components: {
    VirtualScroll
  },
  data() {
    return {
      currentRowKey: 5,
      list: mockData(0, 2000),
      tableData: [],
      checkedRow: null
    }
  },
  methods: {
    handleCurrentChange (val) {
      console.log('handleCurrentChange:', val)
      this.checkedRow = val
    },
    setCheckedRow (row) {
      this.$refs.tableRef.setCurrentRow(row)
    }
  }
}
</script>

<style lang='less' scoped></style>
