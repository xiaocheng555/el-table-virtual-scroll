<template>
  <div>
    <el-alert type="warning" title="在表尾合计行功能中，table组件需使用max-height属性代替height，才会正常显示表尾合计行；" show-icon></el-alert>
    <virtual-scroll
      ref="virtualScroll"
      :data="list"
      :item-size="48"
      key-prop="id"
      @change="(virtualList) => tableData = virtualList">
      <el-table
        :data="tableData"
        border
        row-key="id"
        max-height="500px"
        show-summary
        :summary-method="getSummaries"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="id"
          width="150">
        </el-table-column>
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
        <el-table-column
          prop="zip"
          label="邮编"
          width="320">
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
