<template>
  <div>
    <el-radio-group v-model="value">
      <el-radio :label="undefined">表格不固定高（window滚动：自动查找父层滚动容器window）</el-radio>
      <el-radio label="600px">表格高度600px（表格内滚动）</el-radio>
      <el-radio label="100%">表格高度100%撑满屏幕</el-radio>
    </el-radio-group>
    <!-- :key="value" 为了value变化时刷新VirtualScroll组件 -->
    <virtual-scroll
      ref="virtualScroll"
      :data="list"
      :item-size="62"
      :key="value"
      key-prop="id"
      :style="{height: value === '100%' ? 'calc(100vh - 55px - 25px)' : ''}"
      @change="(virtualList) => tableData = virtualList">
      <el-table
        :data="tableData"
        border
        row-key="id"
        :height="value"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="420">
        </el-table-column>
        <el-table-column label="id" prop="id" width="180"></el-table-column>
        <el-table-column label="日期" width="260" prop="date"></el-table-column>
        <el-table-column label="内容省略" width="260" prop="text" show-overflow-tooltip></el-table-column>
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
      list: mockData(0, 2000),
      value: undefined,
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
