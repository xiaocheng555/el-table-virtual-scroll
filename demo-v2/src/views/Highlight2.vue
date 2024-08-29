<template>
  <div>
    <el-alert type="info" title='版本>=1.26.0支持' show-icon></el-alert>
    <div style="margin-top: 20px">
      <el-button @click="setCheckedRow(list[1])">选中第二行</el-button>
      <el-button @click="setCheckedRow()">取消选择</el-button>
    </div>
      <el-table
        ref="tableRef"
        :data="list"
        height="500"
        tooltip-effect="dark"
        :currentRowKey="currentRowKey"
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
  </div>
</template>

<script>
import { mockData } from '@/utils'

export default {
  components: {
  },
  data() {
    return {
      list: mockData(0, 200),
      tableData: [],
      checkedRow: null,
      currentRowKey: 50
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
