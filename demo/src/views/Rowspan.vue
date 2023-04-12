<template>
  <div>
    <virtual-scroll
      ref="virtualScroll"
      key-prop="id"
      :data="list"
      :item-size="62"
      :row-span-key="getRowSpanKey"
      @change="(virtualList) => tableData = virtualList">
      <el-table
        :data="tableData"
        ref="table"
        border
        row-key="id"
        height="600px"
        style="width: 100%"
        :span-method="objectSpanMethod">
        <el-table-column
          label="分类"
          width="150">
          <template slot-scope="{row}">
            <span>第{{ row.cate }}类别</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="id"
          label="id"
          width="420">
        </el-table-column>
        <el-table-column
          prop="text"
          label="text"
          width="500">
        </el-table-column>
        <el-table-column
          prop="text2"
          label="text2"
          width="500">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="{row}">
            <el-button @click="onDel(row)">删除</el-button>
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
      tableData: []
    }
  },
  methods: {
    // 处理列表数据行合并，根据cate来分组合并
    handleListRowSpan () {
      let prevItem
      this.list.forEach(item => {
        // 如果cate值相同，则增加合并行数
        if (prevItem?.cate === item.cate) {
          prevItem.rowspan++
          item.rowspan = 0
        } else {
          item.rowspan = 1 // 初始化合并行数
          prevItem = item
        }
      })
      console.log(this.list.map(item => item.rowspan), '合并')
    },
    // 表格合并行
    objectSpanMethod ({row, columnIndex}) {
      if (columnIndex === 0) {
        if (row.rowspan) {
          return {
            rowspan: row.rowspan,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    // 合并行中共用相同的key值
    getRowSpanKey (row) {
      return row.cate
    },
    onDel (row) {
      const index = this.list.findIndex(item => item === row)
      if (index > -1) {
        this.list.splice(index, 1)
        this.handleListRowSpan() // 重新计算合并行
        this.$refs.table.doLayout()
      }
    }
  },
  created () {
    this.handleListRowSpan()
  }
}
</script>

<style lang='less' scoped>

</style>
