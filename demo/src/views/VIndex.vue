<template>
  <div>
    <virtual-scroll
      ref="virtualScroll"
      :data="list"
      :item-size="62"
      key-prop="id"
      @change="onChange">
      <el-table
        :data="tableData"
        height="500"
        row-key="id"
        style="width: 100%">
        <virtual-column label="索引" width="160" type="index"></virtual-column>
        <virtual-column label="自定义索引" width="160" type="index" :index="(index) => index * 2"></virtual-column>
        <virtual-column label="索引" width="160">
          <template slot-scope="{ $index }">
            索引值：{{ $index }}
          </template>
        </virtual-column>
        <el-table-column label="索引2" width="160">
          <template slot-scope="{ $index }">
            索引值：{{ start + $index }}
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
    </virtual-scroll>
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
      start: 0
    }
  },
  methods: {
    onChange (virtualList, start) {
      this.tableData = virtualList
      this.start = start
    }
  }
}
</script>

<style lang='less' scoped>

</style>
