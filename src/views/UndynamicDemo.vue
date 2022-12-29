<template>
  <div>
    <virtual-scroll
      ref="virtualScroll"
      :data="list"
      row-key="id"
      :item-size="48"
      key-prop="id"
      :dynamic="false"
      @change="(virtualList) => tableData = virtualList">
      <el-table
        :data="tableData"
        height="500px"
        style="width: 100%">
        <el-table-column label="id" prop="id" width="180"></el-table-column>
        <el-table-column label="日期" width="260" prop="date"></el-table-column>
        <el-table-column label="内容省略" width="260" prop="text" show-overflow-tooltip></el-table-column>
        <el-table-column label="内容" prop="text" show-overflow-tooltip></el-table-column>
      </el-table>
    </virtual-scroll>
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
      tableData: []
    }
  }
}
</script>

<style lang='less' scoped>
</style>