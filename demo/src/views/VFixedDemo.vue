<template>
  <div>
    <el-alert type="warning" title='自定义固定列用法: <el-table :headerCellStyle="cellFixedStyle" :cellStyle="cellFixedStyle"></table>设置固定列样式， 再设置固定列 <virtual-column vfixed="left/right"></virtual-column>，固定列是<virtual-column>组件内部实现，不会生成额外的table，滚动会更丝滑' show-icon></el-alert>
    <virtual-scroll
      ref="virtualScroll"
      :data="list"
      :item-size="57"
      key-prop="id"
      @change="(virtualList) => tableData = virtualList">
      <template slot-scope="{ cellFixedStyle }">
        <el-table
          :data="tableData"
          :headerCellStyle="cellFixedStyle"
          :cellStyle="cellFixedStyle"
          border
          stripe
          row-key="id"
          height="600px"
          style="width: 100%">
          <VirtualColumn
            v-if="show"
            vfixed
            prop="date"
            label="日期"
            width="120">
          </VirtualColumn>
          <VirtualColumn
            vfixed
            prop="name"
            label="姓名"
            width="150">
          </VirtualColumn>
          <VirtualColumn
            vfixed
            prop="province"
            label="省份"
            width="150">
          </VirtualColumn>
          <VirtualColumn
            prop="province"
            label="省份"
            width="200">
          </VirtualColumn>
          <VirtualColumn
            class-name="province"
            prop="province"
            label="省份"
            width="200">
          </VirtualColumn>
          <el-table-column
            className="city"
            prop="city"
            label="市区"
            width="320">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="300">
          </el-table-column>
          <VirtualColumn
            vfixed="right"
            prop="zip"
            label="邮编"
            width="200">
          </VirtualColumn>
          <VirtualColumn
            vfixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </VirtualColumn>
        </el-table>
      </template>
    </virtual-scroll>
    <!-- <el-button @click="show = !show">{{ show ? '隐藏' : '显示'}}第一列</el-button> -->
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
      tableData: [],
      show: true
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
