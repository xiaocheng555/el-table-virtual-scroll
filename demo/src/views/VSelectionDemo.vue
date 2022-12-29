<template>
  <div>
    <virtual-scroll
      ref="virtualScroll"
      :data="list"
      :item-size="62"
      key-prop="id"
      @change="(virtualList) => tableData = virtualList"
      @selection-change="handleSelectionChange">
      <el-table
        :data="tableData"
        height="500"
        row-key="id"
        tooltip-effect="dark"
        style="width: 100%">
        <!-- 多选 -->
        <virtual-column width="60" type="selection"></virtual-column>
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
    </virtual-scroll>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([list[1], list[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
import VirtualScroll from 'el-table-virtual-scroll'
import { VirtualColumn } from 'el-table-virtual-scroll'
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
      multipleSelection: []
    }
  },
  methods: {
    toggleSelection (rows) {
      console.log(rows, 'rows')
      if (rows) {
        rows.forEach(row => {
          this.$refs.virtualScroll.toggleRowSelection(row)
        });
      } else {
        this.$refs.virtualScroll.clearSelection()
      }
    },
    handleSelectionChange (val) {
      console.log('multipleSelection', val)
      this.multipleSelection = val
    }
  },
  created () {
  }
}
</script>

<style lang='less' scoped>

</style>
