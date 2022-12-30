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
          <el-table-column label="地址">
            <el-table-column
              prop="province"
              label="省份"
              width="120">
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
              prop="zip"
              label="邮编"
              width="120">
            </el-table-column>
          </el-table-column>
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
  methods: {

  },
  created () {
  }
}
</script>

<style lang='less' scoped>

</style>
