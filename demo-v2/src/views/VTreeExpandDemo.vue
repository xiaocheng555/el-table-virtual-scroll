<template>
  <div>
    <virtual-scroll
      ref="virtualScroll"
      :data.sync="list"
      :item-size="62"
      key-prop="id"
      @change="virtualList => (tableData = virtualList)">
      <el-table
        ref="table"
        v-loading="loading"
        :data="tableData"
        height="500px"
        style="width: 100%"
        border
        :tree-props="{
          hasChildren: 'hasChildren',
          children: 'children'
        }"
        :load="onload"
        row-key="id"
        @expand-change="handleExpandChange">
        <virtual-column
          width="500"
          label="id"
          prop="id"
          type="tree">
        </virtual-column>
        <el-table-column label="内容" prop="text"></el-table-column>
        <el-table-column width="150" label="是否有子节点" prop="text">
          <template  slot-scope="{ row }">
            <span v-if="row.hasChildren">lazy load</span>
            <span v-else>/</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="260">
          <template slot-scope="{ row }">
            <el-button type="text" @click="toggleRowExpansion(row)">切换展开收起</el-button>
            <el-button type="text" @click="insertChild(row)">插入子节点</el-button>
            <el-button type="text" @click="insertChildAndExpand(row)">插入子节点并展开</el-button>
            <el-button type="text" @click="onDel(row)">删除</el-button>
            <el-button type="text" @click="onEdit(row)">编辑</el-button>
            <el-button type="text" @click="reload(row)">reload</el-button>
            <el-button type="text" @click="getChildNodes(row)">子节点</el-button>
            <el-button type="text" @click="getParentNodes(row)">父节点</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button @click="refresh">refresh</el-button>
      <el-button @click="setRowKeys">setRowKeys([1, 2, 3])</el-button>
    </virtual-scroll>
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
      list: generateTreeData(10),
      tableData: [],
      expandRowKeys: [1, 2, 3, 4]
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
    reload (row) {
      // 重新加载节点；删除原来子节点，并触发load函数重新加载
      row.hasChildren = null
      this.$refs.virtualScroll.reloadNode(row)
    },
    onDel (row) {
    },
    onEdit (row) {
      row.text = row.text + '__编辑'
    },
    getChildNodes (row) {
      const nodes = this.$refs.virtualScroll.getChildNodes(row)
      console.log('子节点：', nodes, nodes.map(node => node.id))
    },
    getParentNodes (row) {
      const nodes = this.$refs.virtualScroll.getParentNodes(row)
      console.log('父节点：', nodes, nodes.map(node => node.id))
    },
    refresh () {
      this.list = generateTreeData(1000)
    },
    setRowKeys () {
      this.expandRowKeys = [1, 2, 3]
    },
    handleExpandChange (row, expandedRows) {
      console.log('handleExpandChange', row, expandedRows)
    },
    toggleRowExpansion (row) {
      this.$refs.table.toggleRowExpansion(row)
    },
    insertChild (row) {
      if (!row.children) {
        this.$set(row, 'children', generateTreeData(1, Date.now()))
      } else {
        row.children.push(...generateTreeData(1, Date.now()))
      }
    },
    insertChildAndExpand (row) {
      this.$refs.table.toggleRowExpansion(row, true)
      this.insertChild(row)
    }
  },
  created () {
    console.log(this.list, 'tree list')
  }
}
</script>

<style lang='less' scoped>

</style>
