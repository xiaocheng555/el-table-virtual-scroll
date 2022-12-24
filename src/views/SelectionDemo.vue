<template>
  <div>
    <el-alert type="warning" title="不支持 Element-UI 原有多选，需自行实现，详见Demo" show-icon></el-alert>
    <VirtualScroll
      ref="virtualScroll"
      :data="list"
      :item-size="62"
      key-prop="id"
      @change="(virtualList) => tableData = virtualList">
      <el-table
        :data="tableData"
        height="500"
        row-key="id"
        tooltip-effect="dark"
        style="width: 100%">
        <!-- 多选 -->
        <el-table-column width="60">
          <template slot="header" slot-scope="{}">
            <el-checkbox v-model="isCheckedAll" :indeterminate="isCheckedImn" @change="onCheckAllRows"></el-checkbox>
          </template>
          <template slot-scope="{ row }">
            <el-checkbox v-model="row.checked" @change="onCheckRow"></el-checkbox>
          </template>
        </el-table-column>
        
        <el-table-column
          label="日期"
          width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </VirtualScroll>
    <div style="margin-top: 20px">
      <el-button @click="setCurrent(list[1])">选中第二行</el-button>
      <el-button @click="setCurrent()">取消选择</el-button>
    </div>
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
      tableData: [],
      isCheckedAll: false, // 全选
      isCheckedImn: false // 控制半选样式
    }
  },
  methods: {
    setCurrent (curRow) {
      this.list.forEach(row => {
        row.checked = row === curRow
      })
      this.onCheckRow()
    },
    // 选择表格所有行
    onCheckAllRows (val) {
      val = this.isCheckedImn ? true : val
      this.list.forEach(row => row.checked = val)
      this.isCheckedAll = val
      this.isCheckedImn = false
    },
    // 选择表格某行
    onCheckRow () {
      const checkedLen = this.list.filter(row => row.checked === true).length
      if (checkedLen === 0) {
        this.isCheckedAll = false
        this.isCheckedImn = false
      } else if (checkedLen === this.list.length) {
        this.isCheckedAll = true
        this.isCheckedImn = false
      } else {
        this.isCheckedAll = false
        this.isCheckedImn = true
      }
    }
  },
  created () {
  }
}
</script>

<style lang='less' scoped>

</style>