<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="list"
      tooltip-effect="dark"
      :select-on-indeterminate="false"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
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
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
import { mockData } from '@/utils'

export default {
  components: {
  },
  data () {
    return {
      list: mockData(0, 200),
      tableData: [],
      multipleSelection: [],
      show: true,
      highlight: false
    }
  },
  methods: {
     toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        });
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  },
  created () {
  }
}
</script>

<style lang='less' scoped>

</style>
