<template>
  <div>
    <VirtualScroll
      ref="virtualScroll"
      :data="list"
      :item-size="62"
      key-prop="id"
      @change="(virtualList) => tableData = virtualList">
      <el-table
        :data="tableData"
        height="500"
        row-key="id"
        tooltip-effect="dark"
        style="width: 100%">
        <el-table-column width="160">
          <template slot-scope="{ row }">
            <el-radio v-model="row.radioCheck" :label="true" @change="onCheckRow(row)">
              <span></span>
            </el-radio>
          </template>
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
      </el-table>
    </VirtualScroll>
    <div style="margin-top: 20px">
      <el-button @click="setCheckedRow(list[1])">选中第二行</el-button>
      <el-button @click="setCheckedRow()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
import VirtualScroll from '../el-table-virtual-scroll'
import { mockData } from '@/utils'

export default {
  components: {
    VirtualScroll
  },
  data () {
    return {
      list: mockData(0, 2000),
      tableData: [],
      checkedRow: null
    }
  },
  methods: {
    // 选择表格某行
    onCheckRow (row) {
      if (this.checkedRow) {
        this.checkedRow.radioCheck = false 
      }
      this.checkedRow = row
      
    },
    setCheckedRow (row) {
      if (this.checkedRow) {
        this.checkedRow.radioCheck = false 
      }
      if (row) {
        row.radioCheck = true
      }
      this.checkedRow = row
    }
  }
}
</script>

<style lang='less' scoped>

</style>