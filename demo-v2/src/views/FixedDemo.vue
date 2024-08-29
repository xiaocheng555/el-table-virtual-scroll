<template>
  <div>
    <el-button @click="show = !show">切换显示</el-button>
    <virtual-scroll
      v-show="show"
      ref="virtualScroll"
      :data="list"
      :item-size="62"
      key-prop="id"
      @change="(virtualList) => tableData = virtualList">
      <el-table
        :data="tableData"
        border
        row-key="id"
        height="500px"
        style="width: 100%">
        <el-table-column label="id" prop="id" fixed></el-table-column>
        <el-table-column label="内容" width="260" prop="text" fixed></el-table-column>
        <el-table-column label="内容省略" width="260" prop="text" show-overflow-tooltip></el-table-column>
        <el-table-column label="详情" min-width="260">
          <template slot-scope="{ row }">
            <el-button type="text" @click="row.show = !row.show;">{{ row.show ? '隐藏' : '显示' }}</el-button>
            <div v-if="row.show">{{ row.text2 }}</div>
          </template>
        </el-table-column>
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
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
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
      show: true,
      list: mockData(0, 2000),
      tableData: []
    }
  },
  methods: {

  },
  mounted() {
  }
}
</script>

<style lang='less' scoped>

</style>
