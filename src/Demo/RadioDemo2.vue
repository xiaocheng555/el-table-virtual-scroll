<template>
  <div>
    <el-alert type="warning" title="不支持 Element-UI 原有单选，需自行实现，详见Demo" show-icon></el-alert>
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
        <virtual-column width="160" type="radio"></virtual-column>
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
      <el-button @click="setCheckedRow(list[1])">选中第二行</el-button>
      <el-button @click="setCheckedRow()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
import VirtualScroll from '../el-table-virtual-scroll'
import VirtualColumn from '../el-table-virtual-column'

export default {
  name: 'RadioDemo2',
  components: {
    VirtualScroll,
    VirtualColumn
  },
  props: {
    list: {}
  },
  data () {
    return {
      tableData: [],
      checkedRow: null
    }
  },
  methods: {
    setCheckedRow (row) {
      this.$refs.virtualScroll.setCurrentRow(row)
    }
  }
}
</script>

<style lang='less' scoped>

</style>