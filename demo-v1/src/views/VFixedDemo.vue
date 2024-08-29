<template>
  <div>
    <el-alert type="warning" title='自定义固定列用法: <el-table :headerCellStyle="headerCellFixedStyle" :cellStyle="cellFixedStyle"></table>设置固定列样式， 再设置固定列 <virtual-column vfixed="left/right"></virtual-column>，固定列是<virtual-column>组件内部实现，不会生成额外的table，滚动会更丝滑' show-icon></el-alert>
    <virtual-scroll
      ref="virtualScroll"
      :data="list"
      :item-size="56"
      key-prop="id"
      @change="(virtualList) => tableData = virtualList">
      <template slot-scope="{ headerCellFixedStyle, cellFixedStyle }">
        <el-table
          :data="tableData"
          :headerCellStyle="headerCellFixedStyle"
          :cellStyle="cellFixedStyle"
          border
          stripe
          row-key="id"
          height="600px"
          style="width: 100%"
          @header-dragend="onHeaderDragend">
          <VirtualColumn
            v-if="show"
            vfixed
            prop="date"
            label="日期"
            min-width="180">
          </VirtualColumn>
          <VirtualColumn
            vfixed
            prop="name"
            label="姓名"
            :formatter="formatter"
            min-width="150">
          </VirtualColumn>
          <el-table-column label="id" prop="id"></el-table-column>
          <el-table-column label="内容" width="260" prop="text"></el-table-column>
          <el-table-column label="内容省略" width="260" prop="text" show-overflow-tooltip></el-table-column>
          <el-table-column label="详情" min-width="260">
            <template slot-scope="{ row }">
              <el-button type="text" @click="row.show = !row.show;">{{ row.show ? '隐藏' : '显示' }}</el-button>
              <div v-if="row.show">{{ row.text2 }}</div>
            </template>
          </el-table-column>
          <el-table-column
            prop="province"
            label="省份"
            width="150">
          </el-table-column>
          <el-table-column
            prop="province"
            label="省份"
            width="200">
          </el-table-column>
          <el-table-column
            class-name="province"
            prop="province"
            label="省份"
            width="200">
          </el-table-column>
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
            width="150">
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
    开启减缓滚动速度：<el-switch v-model="isSlow"></el-switch>
    <!-- <el-button @click="show = !show">{{ show ? '隐藏' : '显示'}}第一列</el-button> -->
  </div>
</template>

<script>
import VirtualScroll, { VirtualColumn } from 'el-table-virtual-scroll'
import { mockData } from '@/utils'

const userAgent = navigator.userAgent
const isMac = /Macintosh/.test(userAgent)
const isChrome = /Chrome/.test(userAgent)
const isFirefox = /Firefox/.test(userAgent)

export default {
  components: {
    VirtualScroll,
    VirtualColumn
  },
  data () {
    return {
      list: mockData(0, 2000),
      tableData: [],
      show: true,
      isSlow: false,
      isMac
    }
  },
  methods: {
    onHeaderDragend () {
      // 使用自定义列，改变列宽度后，需要手动更新table头部
      this.$refs.virtualScroll.doHeaderLayout()
    },
    formatter(row, column, value, index) {
      const text = `姓名：${value}`
      // 需要同时支持string和VNode
      return index % 2 === 0 ? text : this.$createElement('span', text + '==')
    }
  },
  watch: {
    isSlow (val) {
      setTimeout(() => {
        // mac电脑谷歌、火狐浏览器上，会出现滚动白屏，通过调用slowOnMousewheel减缓滚动速度，减少白屏
        if (isMac && (isChrome || isFirefox)) {
          // 滚轮滚动速度减缓，减少快速滚动白屏
          this.$refs.virtualScroll.slowOnMousewheel(val ? 1 : 0)
        } else {
          alert('非mac电脑，不执行slowOnMousewheel')
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>

</style>
