<template>
  <div>
    <VirtualScroll
      ref="virtualScroll"
      :data="list"
      :height="62"
      key-prop="id"
      @change="(virtualList) => tableData = virtualList">
      <el-table
        :data="tableData"
        height="500"
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
    </VirtualScroll>
  </div>
</template>

<script>
import VirtualScroll from '../el-table-virtual-scroll'

export default {
  props: {
    list: {}
  },
  components: {
    VirtualScroll
  },
  data () {
    return {
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