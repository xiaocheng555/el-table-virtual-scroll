<template>
  <div>
    <VirtualScroll
      ref="virtualScroll"
      :data="mList"
      :item-size="62"
      key-prop="id"
      @change="(virtualList) => tableData = virtualList">
      <el-table
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @sort-change="onSortChange">
        <el-table-column
          label="随机数"
          prop="count"
          width="300"
          sortable="count">
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
  </div>
</template>

<script>
import VirtualScroll from '../el-table-virtual-scroll'

export default {
  name: 'RadioDemo',
  components: {
    VirtualScroll
  },
  props: {
    list: {}
  },
  data () {
    return {
      mList: [...this.list],
      originList: [],
      tableData: []
    }
  },
  methods: {
    onSortChange ({prop, order }) {
      if (!order) {
        this.mList = [...this.originList]
        return
      }
      
      this.mList.sort((a, b) => {
        if (order === 'ascending') {
          return a[prop] - b[prop]
        } else if (order === 'descending') {
          return b[prop] - a[prop] 
        }
      })
    }
  },
  created () {
    this.originList = [...this.mList]
  }
}
</script>

<style lang='less' scoped>

</style>