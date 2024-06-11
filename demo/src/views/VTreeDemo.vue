<template>
  <div>
    <virtual-scroll
      ref="virtualScroll"
      :data.sync="list"
      :item-size="62"
      key-prop="id"
      @change="virtualList => (tableData = virtualList)">
      <el-table
        v-loading="loading"
        :data="tableData"
        height="500px"
        style="width: 100%"
        border
        row-key="id">
        <virtual-column
          width="500"
          ref="treeColumn"
          label="id"
          prop="id"
          type="tree"
          :tree-props="{
            hasChildren: 'hasChildren',
            children: 'children'
          }"
          :load="onload">
        </virtual-column>
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
            <el-button type="text" @click="onDel(row)">删除</el-button>
            <el-button type="text" @click="onEdit(row)">编辑</el-button>
            <el-button type="text" @click="reload(row)">reload</el-button>
            <el-button type="text" @click="getChildNodes(row)">子节点</el-button>
            <el-button type="text" @click="getParentNodes(row)">父节点</el-button>
          </template>
        </el-table-column>
      </el-table>
    </virtual-scroll>
  </div>
</template>

<script>
import VirtualScroll from 'el-table-virtual-scroll'
import { VirtualColumn } from 'el-table-virtual-scroll'
import { generateTreeData } from '@/utils'

export default {
  components: {
    VirtualScroll,
    VirtualColumn
  },
  data () {
    return {
      loading: false,
      list: generateTreeData(1000),
      tableData: []
    }
  },
  methods: {
    onload (row, resolve) {
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
      this.$refs.treeColumn.reloadNode(row)
    },
    onDel (row) {
      this.$refs.treeColumn.removeNode(row)
    },
    onEdit (row) {
      row.text =  row.text + '__编辑'
    },
    getChildNodes (row) {
      const nodes = this.$refs.treeColumn.getChildNodes(row)
      console.log('子节点：', nodes, nodes.map(node => node.id))
    },
    getParentNodes (row) {
      const nodes = this.$refs.treeColumn.getParentNodes(row)
      console.log('父节点：', nodes, nodes.map(node => node.id))
    }
  },
  created () {
    console.log(this.list, 'tree list')
  }
}
</script>

<style lang='less' scoped>

</style>
