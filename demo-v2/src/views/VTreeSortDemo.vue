<template>
  <div>
    <div>
      <el-button @click="expandAll">展开全部</el-button>
      <el-button @click="unexpandAll">收起全部</el-button>
    </div>
    <virtual-scroll
      ref="virtualScroll"
      :data.sync="list"
      :item-size="62"
      key-prop="id"
      @change="virtualList => (tableData = virtualList)">
      <el-table
        v-loading="loading"
        :data="tableData"
        ref="table"
        height="500px"
        style="width: 100%"
        border
        lazy
        :default-sort="{
          prop: 'count',
          order: 'ascending'
        }"
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
          type="tree"
          sortable>
        </virtual-column>
        <el-table-column label="随机数" prop="count" width="300" sortable column-key="counts"
          :filter-multiple="false" :filters="filters2" :filter-method="filterCount">
        </el-table-column>
        <el-table-column label="content" prop="text" width="500" column-key="texts" :filters="filters" :filter-method="filterText" :filtered-value="filteredValue">
        </el-table-column>
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
    <el-button @click="clearSort()">clearSort</el-button>
    <el-button @click="clearFilter()">clearFilter</el-button>
    <el-button @click="sort()">设置count降序排序</el-button>
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
      tableData: [],
      filteredValue: [], // ['红豆']
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
      ]
    }
  },
  methods: {
    onSortChange (data) {
      console.log('onSortChange', data)
      // this.list = mockData(0, flag)
    },
    onFilterChange (filters) {
      console.log('onFilterChange', filters)
    },
    filterCount (value, row, column) {
      const property = column.property
      return row[property] > value
    },
    filterText (value, row, column) {
      const property = column.property
      return row[property].includes(value)
    },
    clearSort () {
      this.$refs.table.clearSort()
    },
    clearFilter () {
      this.$refs.table.clearFilter()
    },
    sort () {
      this.$refs.table.sort('count', 'descending')
    },
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
    unexpandAll () {
      this.$refs.virtualScroll.unexpandAllNodes()
    },
    expandAll () {
      this.$refs.virtualScroll.expandAllNodes()
    }
  },
  created () {
    console.log(this.list, 'tree list')
  }
}
</script>

<style lang='less' scoped>

</style>
