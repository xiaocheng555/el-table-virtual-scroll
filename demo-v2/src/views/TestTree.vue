<template>
  <div>
    {{ expandRowKeys }}
      <el-table
        ref="table"
        v-loading="loading"
        :data="tableData"
        height="500px"
        style="width: 100%"
        border
        lazy
        :tree-props="{
          hasChildren: 'hasChildren',
          children: 'children'
        }"
        :load="onload"
        :expand-row-keys="expandRowKeys"
        row-key="id"
        @expand-change="handleExpandChange">
        <el-table-column
          width="500"
          label="id"
          prop="id">
        </el-table-column>
        <el-table-column width="150" label="是否有子节点" prop="text">
          <template  slot-scope="{ row }">
            <span v-if="row.hasChildren">有</span>
            <span v-else-if="row.hasChildren === false">无</span>
            <span v-else>加载子节点</span>
          </template>
        </el-table-column>
        <el-table-column label="内容" prop="text"></el-table-column>
        <el-table-column label="操作" width="260">
          <template slot-scope="{ row }">
            <el-button type="text" @click="toggleRowExpansion(row)">切换展开收起</el-button>
            <el-button type="text" @click="onEdit(row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button @click="fresh">fresh</el-button>
      <el-button @click="setRowKeys">set</el-button>
  </div>
</template>

<script>
import VirtualScroll, { VirtualColumn } from 'el-table-virtual-scroll'
import { generateTreeData } from '@/utils'

export default {
  components: {
    VirtualScroll,
    VirtualColumn
  },
  data () {
    return {
      loading: false,
      tableData: generateTreeData(10),
      expandRowKeys: ['1', '2', '1_1']
    }
  },
  methods: {
    onload (row, tree, resolve) {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          row.hasChildren = false
          return resolve([])
        }
        row.hasChildren = true
        resolve(generateTreeData(5, row.id))
      }, 1000)
    },
    fresh () {
      this.tableData = generateTreeData(20)
    },
    setRowKeys () {
      this.expandRowKeys = ['1', '2', '3', '1_1']
    },
    handleExpandChange (row, expandedRows) {
      console.log(row, expandedRows, '==')
    },
    toggleRowExpansion (row) {
      this.$refs.table.toggleRowExpansion(row)
    }
  },
  created () {
  }
}
</script>

<style lang='less' scoped>

</style>
