<template>
  <div>
    带边框：<el-switch v-model="border"></el-switch> /
    带状态表格：<el-switch v-model="status"></el-switch> /
    带条纹：<el-switch v-model="stripe"></el-switch>
    <virtual-scroll
      ref="virtualScroll"
      :data="list"
      row-key="id"
      :item-size="62"
      key-prop="id"
      :getElTable="getElTable"
      @change="(virtualList) => tableData = virtualList">
      <template slot-scope="{ headerCellFixedStyle, cellFixedStyle }">
        <MyTable
          ref="myTable"
          :data="tableData"
          :stripe="stripe"
          :border="border"
          height="500px"
          style="width: 100%"
          :headerCellStyle="headerCellFixedStyle"
          :cellStyle="cellFixedStyle"
          :row-class-name="tableRowClassName">
          <VirtualColumn label="id" prop="id" width="180" vfixed></VirtualColumn>
          <!-- <el-table-column label="id" prop="id" width="180" fixed></el-table-column> -->
          <el-table-column label="日期" width="260" prop="date"></el-table-column>
          <el-table-column label="内容省略" width="800" prop="text" show-overflow-tooltip></el-table-column>
          <el-table-column label="内容" prop="text" width="800"></el-table-column>
        </MyTable>
      </template>
    </virtual-scroll>
  </div>
</template>

<script>
import VirtualScroll, { VirtualColumn } from 'el-table-virtual-scroll'
import { mockData } from '@/utils'
import MyTable from './MyTable.vue'

export default {
  components: {
    VirtualScroll,
    VirtualColumn,
    MyTable
  },
  data () {
    return {
      list: mockData(0, 2000),
      tableData: [],
      stripe: false,
      border: false,
      status: false
    }
  },
  methods: {
    tableRowClassName ({ row }) {
      if (!this.status) return

      if (row.index === 1) {
        return 'warning-row'
      } else if (row.index === 3) {
        return 'success-row'
      }
      return ''
    },
    getElTable () {
      return this.$refs.myTable.$children[0]
    }
  }
}
</script>

<style lang='less' scoped>
/deep/ .el-table .warning-row {
  background: oldlace;
}
/deep/ .el-table .success-row {
  background: #f0f9eb;
}
</style>
