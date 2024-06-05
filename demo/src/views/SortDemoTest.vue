<template>
  <div>
    <el-table ref="table" :data="list" tooltip-effect="dark" style="width: 100%" row-key="id" height="500px" @sort-change="onSortChange" @filter-change="onFilterChange">
      <el-table-column width="60" type="selection" :selectable="getSelectable"></el-table-column>
      <el-table-column label="id" prop="id" width="100" sortable>
      </el-table-column>
      <el-table-column label="随机数" prop="count" width="300" sortable
        :filter-multiple="false" :filters="filters2" :filter-method="filterCount">
      </el-table-column>
      <el-table-column label="content" prop="text" width="500" :filters="filters" :filter-method="filterText">
      </el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <el-button @click="refresh">refresh</el-button>
    <el-button @click="clear">clear</el-button>
    <el-button @click="add">add</el-button>
    <el-button @click="addMore">addMore</el-button>
    <el-button @click="toggleSelection([list[1], list[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
    <el-button @click="show = !show">show</el-button>
  </div>
</template>

<script>
import { mockData } from '@/utils'

let flag = 200

export default {
  name: 'SortDemoTest',
  data() {
    const list = mockData(0, flag)
    return {
      list: list,
      filters: [
        { text: '红豆', value: '红豆' },
        { text: '明月', value: '明月' },
        { text: '酒', value: '酒' },
        { text: '桃花', value: '桃花' }
      ],
      filters2: [
        { text: '>200', value: 200 },
        { text: '>400', value: 400 },
        { text: '>600', value: 600 },
        { text: '>800', value: 800 }
      ],
      filterVal: { // 过滤的值，可以有多个
        texts: [],
        counts: []
      },
      sortVal: {} // 排序的值，只有一个
    }
  },
  methods: {
    getSelectable (row, idx) {
      return idx > 2
    },
    onSortChange ({ prop, order }) {
      console.log(prop, order, 'prop, order')
      // this.list = mockData(0, flag)
    },
    onFilterChange (filters) {
      console.log('filters', filters)
    },
    refresh () {
      this.list = mockData(0, 200)
    },
    clear () {
      this.list = []
    },
    add () {
      const data = mockData(++flag, flag + 1)
      this.list.push(...data)
    },
    addMore () {
      const data = mockData(++flag, flag + 5)
      this.list.push(...data)
      flag += 5
    },
    filterCount (value, row, column) {
      const property = column['property']
      return row[property] > value
    },
    filterText (value, row, column) {
      const property = column['property']
      return row[property].includes(value)
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.table.toggleRowSelection(row)
        })
      } else {
        this.$refs.table.clearSelection()
      }
    }
  },
  created() {
  }
}
</script>

<style lang='less' scoped></style>
