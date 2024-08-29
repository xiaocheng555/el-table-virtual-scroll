<template>
  <div class="scroller-box">
    开启减缓滚动速度：<el-switch v-model="isSlow"></el-switch>

    <h2>红色边框的是滚动容器</h2>
    <p
      :style="{height: largeHeight ? '600px' : '200px', background: 'pink'}"
      @click="onHeightChange">
      点击改变高度
    </p>
    <virtual-scroll
      ref="virtualScroll"
      :data="list"
      :item-size="62"
      scroll-box=".scroller-box"
      key-prop="id"
      @change="(virtualList) => tableData = virtualList">
      <el-table
        :data="tableData"
        row-key="id"
        border
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
          <template slot-scope="">
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </virtual-scroll>
    <p>一些内容</p>
    <p>一些内容</p>
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
      tableData: [],
      largeHeight: false,
      isSlow: false
    }
  },
  methods: {
    onHeightChange () {
      this.largeHeight = !this.largeHeight
      // 当滚动容器顶部内容高度变化很大时，需要更新虚拟滚动组件，避免出现表格出现一段空白内容
      this.$nextTick(() => {
        this.$refs.virtualScroll.update()
      })
    }
  },
  watch: {
    isSlow(val) {
      setTimeout(() => {
        this.$refs.virtualScroll.slowOnMousewheel(val ? 1 : 0)
      })
    }
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
