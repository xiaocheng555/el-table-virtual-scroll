<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="list"
      tooltip-effect="dark"
      :select-on-indeterminate="false"
      style="width: 100%"
      row-key="id"
      height="400"
      @selection-change="handleSelectionChange">
      <el-table-column
        reserve-selection
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
      <el-table-column label="操作" width="260">
        <template slot-scope="{ row }">
          {{ row.id }}
          <el-button @click="onDel(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([list[1], list[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
      <el-button @click="refresh()">重新获取数据</el-button>
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
      list: mockData(0, 50),
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
          this.$refs.multipleTable.toggleRowSelection(row, true)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      console.log(val, 'val')
      this.multipleSelection = val
    },
    refresh () {
      this.list = mockData(30, 80)
    },
    onDel (row) {
      const index = this.list.findIndex(item => item === row)
      if (index > -1) {
        this.list.splice(index, 1)
      }
    }
  },
  created () {
  }
}
</script>

<style lang='less' scoped>

</style>
