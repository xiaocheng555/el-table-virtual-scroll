<template>
  <div>
    <virtual-scroll
      ref="virtualScroll"
      :data="list"
      :item-size="48"
      key-prop="id"
      @change="(virtualList) => tableData = virtualList">
      <template slot-scope="{ headerCellFixedStyle, cellFixedStyle }">
        <el-table
          :data="tableData"
          border
          row-key="id"
          height="500px"
          show-summary
          :summary-method="getSummaries"
          style="width: 100%"
          :headerCellStyle="headerCellFixedStyle"
          :cellStyle="cellFixedStyle">
          <VirtualColumn
            vfixed
            prop="date"
            label="日期"
            min-width="180">
          </VirtualColumn>
          <VirtualColumn
            vfixed
            prop="id"
            label="id"
            width="150">
          </VirtualColumn>
          <el-table-column
            prop="count"
            label="价格"
            width="150">
          </el-table-column>
          <el-table-column
            prop="index"
            label="index"
            width="300">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="420">
          </el-table-column>
          <el-table-column
            prop="province"
            label="省份"
            width="320">
          </el-table-column>
          <el-table-column
            prop="city"
            label="市区"
            width="320">
          </el-table-column>
          <VirtualColumn
            vfixed="right"
            prop="zip"
            label="邮编"
            width="320">
          </VirtualColumn>
        </el-table>
      </template>
    </virtual-scroll>
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
      list: mockData(0, 2000),
      tableData: []
    }
  },
  computed: {
    // 计算总和
    summary () {
      let countSum = 0
      let indexSum = 0
      this.list.forEach(item => {
        countSum += item.count
        indexSum += item.index
      })
      return {
        countSum,
        indexSum
      }
    }
  },
  methods: {
    // 显示合计行的值
    getSummaries (param) {
      const sums = []
      param.columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总计'
        } else if (column.property === 'count') {
          sums[index] = this.summary.countSum + '元'
        } else if (column.property === 'index') {
          sums[index] = this.summary.indexSum
        } else {
          sums[index] = 'N/A'
        }
      })
      return sums
    }
  }
}
</script>

<style lang='less' scoped>

</style>
