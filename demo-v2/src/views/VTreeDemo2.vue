<template>
  <div>
    <el-alert type="warning" title="virtual-column组件设type属性为 tree" show-icon></el-alert>
    <div>
      <el-button @click="expandAll">展开全部</el-button>
      <el-button @click="unexpandAll">收起全部</el-button>
      <el-button @click="unexpandTarget">展开目标路径</el-button>
    </div>
    <VirtualScroll
      ref="virtualScroll"
      class="visual-table"
      :data.sync="treeData"
      :item-size="48"
      key-prop="id"
      @change="(virtualList) => (tableData = virtualList)">
      <el-table
        ref="tableRef"
        v-loading="loading"
        :data="tableData"
        height="calc(100vh - 150px)"
        default-expand-all
        :highlight-current-row="true"
        row-key="id">
        <VirtualColumn
          type="tree"
          :indent="40"
          :minWidth="300"
          label=""
          prop="product">
          <template slot-scope="{ row }">
            <div v-if="row['describe']" style="line-height: 1.2em">
              <div>
                {{ row["product"] }}
              </div>
              <div style="color: grey; font-size: 12px">
                {{ row["describe"] }}
              </div>
            </div>
            <div v-else style="white-space: nowrap">
              {{ row["product"] }}
            </div>
          </template>
        </VirtualColumn>
        <el-table-column :minWidth="100" label="id" prop="id"></el-table-column>
        <el-table-column :minWidth="100" label="随机名" prop="database"></el-table-column>
        <el-table-column :minWidth="40" label="排序" prop="rank"></el-table-column>
        <el-table-column :minWidth="60" label="数据" prop="status"></el-table-column>
      </el-table>
    </VirtualScroll>
  </div>
</template>

<script>
import VirtualScroll, { VirtualColumn } from 'el-table-virtual-scroll'
import cloneDeep from 'lodash/cloneDeep'
import datamap from '../datamap.json'

export default {
  name: 'VTreeDemo2',
  components: {
    VirtualScroll,
    VirtualColumn
  },
  data () {
    return {
      tableData: [],
      treeData: [],
      loading: false,
      dataMap: {}
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.dataMap = datamap
      this.treeData = [
        {
          id: '49__@@__1',
          product: '产品线',
          productId: 49,
          parent: null,
          isRoot: true
        },
        {
          id: '-1__@@__4690',
          product: '未归类头部表',
          productId: -1,
          parent: null,
          isRoot: true
        }
      ]
      // 生成树
      const traverse = (nodes) => {
        nodes.forEach(node => {
          if (Array.isArray(this.dataMap[node.id])) {
            node.children = cloneDeep(this.dataMap[node.id])
            traverse(node.children)
          }
        })
      }
      traverse(this.treeData)
    },
    unexpandAll () {
      this.$refs.virtualScroll.unexpandAllNodes()
    },
    expandAll () {
      this.$refs.virtualScroll.expandAllNodes()
    },
    async unexpandTarget () {
      const targetKey = '2902__@@__4324'

      const find = (nodes) => {
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i]
          if (node.id === targetKey) {
            return node
          }
          if (Array.isArray(node.children)) {
            const target = find(node.children)
            if (target) return target
          }
        }
      }
      const targetNode = find(this.treeData)
      const parentNodes = this.$refs.virtualScroll.getParentNodes(targetNode)
      parentNodes.push(targetNode)
      parentNodes.forEach(node => {
        this.$refs.tableRef.toggleRowExpansion(node, true)
      })
      this.$nextTick(() => {
        this.scrollTo(targetNode)
      })
    },
    scrollTo (node) {
      if (node) {
        this.$refs.virtualScroll.scrollToRow(node, 30)
        const speed = 300
        // 闪烁效果
        setTimeout(() => {
          this.$refs.tableRef.setCurrentRow(node)
        })
        setTimeout(() => {
          this.$refs.tableRef.setCurrentRow(null)
        }, speed)
        setTimeout(() => {
          this.$refs.tableRef.setCurrentRow(node)
        }, speed * 2)
        setTimeout(() => {
          this.$refs.tableRef.setCurrentRow(null)
        }, speed * 3)
      }
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .cell {
  display: flex;
  align-items: center;
  overflow: unset !important;
}

.visual-table {
  width: 100%;
  height: 80vh;
  border: 1px solid #eee;
  border-radius: 4px;
}
</style>
