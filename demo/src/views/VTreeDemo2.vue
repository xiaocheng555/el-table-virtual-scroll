<template>
  <div>
    <div>
      <el-button @click="expand1">展开第一层</el-button>
      <el-button @click="expand2">展开第二层</el-button>
      <el-button @click="expandAll">展开全部</el-button>
      <el-button @click="unexpandAll">收起全部</el-button>
      <el-button @click="unexpandTarget">展开目标路径</el-button>
    </div>
    <VirtualScroll
      ref="virtualScroll"
      class="visual-table"
      :data.sync="treeData"
      :item-size="40"
      key-prop="id"
      @change="(virtualList) => (tableData = virtualList)">
      <el-table
        ref="tableRef"
        v-loading="loading"
        :data="tableData"
        height="calc(100vh - 150px)"
        :highlight-current-row="true"
        row-key="id">
        <VirtualColumn
          ref="virtualColumn"
          type="tree"
          :indent="40"
          :minWidth="300"
          label=""
          prop="product"
          :load="onload">
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
    VirtualColumn,
  },
  data() {
    return {
      tableData: [],
      treeData: [],
      loading: false,
      dataMap: {}
    };
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData() {
      this.dataMap = datamap
      this.treeData = [
        {
          id: "49__@@__1",
          product: "产品线",
          productId: 49,
          parent: null,
          isRoot: true,
          $v_level: 1
        },
        {
          id: "-1__@@__4690",
          product: "未归类头部表",
          productId: -1,
          parent: null,
          isRoot: true,
          $v_level: 1
        }
      ]
    },
    async onload (row, resolve) {
      setTimeout(() => {
        resolve(cloneDeep(this.dataMap[row.id] || []))
      }, 200)
    },
    expand (level) {
      const expandKeys = this.treeData.filter(item => item.$v_level === level).map(item => item.id)
      return this.$refs.virtualColumn.expand(expandKeys).then(() => {
        console.log(`展开第${level}层完成`)
      })
    },
    async expand1 () {
      this.$refs.virtualColumn.unexpandAll()
      await this.expand(1)
    },
    async expand2 () {
      this.$refs.virtualColumn.unexpandAll()
      await this.expand(1)
      await this.expand(2)
    },
    unexpandAll () {
      this.$refs.virtualColumn.unexpandAll()
    },
    expandAll () {
      this.$refs.virtualColumn.expandAll()
    },
    async unexpandTarget () {
      const pathKeys = ['49__@@__1', '120__@@__4200', '114__@@__4201', '2902__@@__4324']
      const key = await this.$refs.virtualColumn.expandPath(pathKeys)
      key && this.scrollTo(key)
    },
    scrollTo (key) {
      if (key) {
        const index = this.treeData.findIndex((item) => item['id'] === key)
        this.$refs.virtualScroll.scrollTo(index, 50)
        const speed = 300
        // 闪烁效果
        setTimeout(() => {
          this.$refs['tableRef'].setCurrentRow(this.treeData[index])
        })
        setTimeout(() => {
          this.$refs['tableRef'].setCurrentRow(null)
        }, speed)
        setTimeout(() => {
          this.$refs['tableRef'].setCurrentRow(this.treeData[index])
        }, speed * 2)
        setTimeout(() => {
          this.$refs['tableRef'].setCurrentRow(null)
        }, speed * 3)
      }
    }
  }
}
</script>

<style>
.cell {
  display: flex;
  align-items: center;
  overflow: unset !important;
}

.el-table .el-table__cell {
  position: unset;
  padding: 6px 0 !important;
}

.visual-table {
  width: 100%;
  height: 80vh;
  border: 1px solid #eee;
  border-radius: 4px;
}
</style>
