<template>
  <div>
    <el-alert type="warning" title="virtual-column组件设type属性为 tree" show-icon></el-alert>
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
        :tree-props="{
          hasChildren: 'hasChildren',
          children: 'children'
        }"
        :load="onload"
        row-key="id">
        <virtual-column
          width="500"
          label="id"
          prop="id"
          type="tree">
        </virtual-column>
        <el-table-column width="150" label="懒加载节点" prop="text">
          <template  slot-scope="{ row }">
            <span v-if="row.hasChildren">lazy</span>
            <span v-else>/</span>
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
    <el-button @click="loadNodes()">加载前5个节点</el-button>
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
      list: generateTreeData(1000),
      tableData: []
    }
  },
  methods: {
    onload (row, tree, resolve) {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          return resolve([])
        }
        resolve(generateTreeData(5, row.id))
      }, 1000)
    },
    reload (row) {
      this.$refs.virtualScroll.reloadNode(row)
    },
    onDel (row) {
      const parentNode = this.$refs.virtualScroll.getParentNode(row)
      if (parentNode) {
        parentNode.children = parentNode.children.filter(node => node !== row)
      } else {
        this.list = this.list.filter(node => node !== row)
      }
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
    loadNodes () {
      [0, 1, 2, 3, 4].forEach(i => {
        this.$refs.virtualScroll.reloadNode(this.list[i])
      })
    }
  },
  created () {
    console.log(this.list, 'tree list')
  }
}
</script>

<style lang='less' scoped>

</style>
