<template>
  <div>
    <virtual-scroll
      ref="virtualScroll"
      :data="list"
      :item-size="62"
      key-prop="id"
      @change="(virtualList) => tableData = virtualList">
      <el-table
        :data="tableData"
        height="500"
        row-key="id"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="150">
        </el-table-column>
        <el-table-column label="配送信息">
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <VirtualColumn label="地址">
            <VirtualColumn
              show-overflow-tooltip
              class-name="text"
              :formatter="formatter"
              label-class-name="label1"
              align="left"
              prop="text"
              label="text"
              min-width="120">
            </VirtualColumn>
            <el-table-column
              show-overflow-tooltip
              :formatter="formatter"
              prop="text"
              label="text"
              min-width="120">
            </el-table-column>
            <el-table-column
              prop="city"
              label="市区"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="300">
            </el-table-column>
            <el-table-column
              class-name="yz"
              align="right"
              header-align="center"
              prop="zip"
              label="邮编"
              width="120">
            </el-table-column>
            <VirtualColumn
              label="详情"
              align="right"
              header-align="center"
              class-name="detail"
              label-class-name="label2">
              <template slot-scope="{ row }">
                <div>{{ row.text2 }}</div>
              </template>
            </VirtualColumn>
          </VirtualColumn>
        </el-table-column>
      </el-table>
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
  methods: {
    formatter (row, column, value) {
      return `${row.id} 姓名：${value}`
    }
  },
  created () {
  }
}
</script>

<style lang='less' scoped>

</style>
