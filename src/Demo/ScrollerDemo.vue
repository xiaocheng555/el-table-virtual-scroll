<template>
  <div class="scroller-box">
    <h2>红色边框的是滚动容器</h2>
    <p>一些内容</p>
    <p>一些内容</p>
    <VirtualScroll
      ref="virtualScroll"
      :data="list"
      :item-size="62"
      scroll-box=".scroller-box"
      key-prop="id"
      @change="(virtualList) => tableData = virtualList">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          fixed
          prop="date"
          label="日期"
          width="150">
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
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          width="320">
        </el-table-column>
        <el-table-column
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </VirtualScroll>
    <p>一些内容</p>
    <p>一些内容</p>
  </div>
</template>

<script>
import VirtualScroll from '../el-table-virtual-scroll'

export default {
  name: 'ScrollerDemo',
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
.scroller-box {
  height: 700px;
  overflow: auto;
  border: 1px solid red;
}
</style>