<template>
  <div>
    <virtual-scroll ref="virtualScroll" :data="mList" :item-size="71" key-prop="id"
      @change="(virtualList) => tableData = virtualList">
      <el-table :data="tableData" tooltip-effect="dark" style="width: 100%" row-key="id" @sort-change="onSortChange"
        @filter-change="onFilterChange">
        <el-table-column label="id" prop="id" width="100" sortable="count">
        </el-table-column>
        <el-table-column label="随机数" prop="count" width="300" sortable="count" column-key="counts"
          :filter-multiple="false" :filters="filters2">
        </el-table-column>
        <el-table-column label="content" prop="text" width="500" column-key="texts" :filters="filters">
        </el-table-column>
        <el-table-column label="日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </virtual-scroll>
  </div>
</template>

<script>
import VirtualScroll from 'el-table-virtual-scroll'
import { mockData } from '@/utils'

export default {
  name: 'RadioDemo',
  components: {
    VirtualScroll
  },
  data() {
    const list = mockData(0, 2000)
    return {
      list: list,
      mList: [...list],
      originList: [],
      tableData: [],
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
    onSortChange({ prop, order }) {
      this.sortVal = { prop, order }
      this.doFilter()
    },
    onFilterChange(filters) {
      Object.assign(this.filterVal, filters)
      this.doFilter()
    },
    doFilter() {
      // 过滤
      const { texts, counts } = this.filterVal
      this.mList = this.originList.filter(item => {
        return (!texts.length || texts.some(val => item.text.includes(val)))
          && (!counts.length || counts.some(val => item.count > val))
      })

      // 排序
      const { prop, order } = this.sortVal
      if (order) {
        this.mList.sort((a, b) => {
          if (order === 'ascending') {
            return a[prop] - b[prop]
          } else if (order === 'descending') {
            return b[prop] - a[prop]
          }
        })
      }
    }
  },
  created() {
    this.originList = [...this.mList]
  }
}
</script>

<style lang='less' scoped></style>
