<template>
  <div id="app">
    <div class="app-header">
      <!-- <el-input v-model="inputVal" @change="locate" /> -->
      <!-- <el-button @click="expandFirst">展开第一层</el-button> -->
      <el-input v-model="inputVal" @keydown.native.enter="onEnter"></el-input>
    </div>
    <el-table
      ref="tableRef"
      v-loading="loading"
      :data="currentList"
      height="calc(100vh - 150px)"
      :highlight-current-row="true"
      :expand-row-keys="expandKeys"
      row-key="id"
      lazy
      :load="onload"
      :tree-props="{ children: 'children', hasChildren: '$v_hasChildren' }">
      <el-table-column
        ref="virtualColumn"
        prop="product">
        <!-- <template slot-scope="{ row }">
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
        </template> -->
      </el-table-column>
      <el-table-column :minWidth="100" label="随机名" prop="database">
        </el-table-column>
        <el-table-column :minWidth="100" label="id" prop="id">
          </el-table-column>
      <el-table-column :minWidth="40" label="排序" prop="rank"></el-table-column>
      <el-table-column :minWidth="60" label="数据" prop="status">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import VirtualScroll, { VirtualColumn } from 'el-table-virtual-scroll'
import cloneDeep from 'lodash/cloneDeep'
import datamap from "../datamap.json"
import flatjson from "../flatjson.json"

export default {
  name: "App",
  components: {
    // VirtualScroll,
    // VirtualColumn,
  },
  data() {
    return {
      tableData: [],
      currentList: [],
      expandKeys: ['78__@@__2'],
      loading: false,
      flatNodeList: [], // flat node list
      dataMap: {},
      oneLevelExpandKeys: [],
      cloneCurrentList: [],
      inputVal: '',
    };
  },
  mounted() {
    this.inputVal = JSON.stringify(this.expandKeys)
    this.initData();
  },
  methods: {
    onEnter () {
      console.log('onEnter')
      try {
        const val = JSON.parse(this.inputVal)
        Array.isArray(val) && (this.expandKeys = val)
      } catch (err) {
        console.error(err)
      }
    },
    async onload(row, treeNode, resolve) {
      resolve(cloneDeep(this.dataMap[row.id] || []));
    },
    initData() {
      this.loading = true;
      this.dataMap = datamap;
      this.flatNodeList = flatjson;
      this.currentList = [
        {
          id: "49__@@__1",
          product: "产品线",
          productId: 49,
          $v_hasChildren: true,
          parent: null,
          isRoot: true,
          isAutoExpand: true,
          children: this.dataMap['49__@@__1'].map(item => {
            item.$v_hasChildren = true
            return item
          })
        },
        {
          id: "-1__@@__4690",
          product: "未归类头部表",
          productId: -1,
          $v_hasChildren: true,
          parent: null,
          isRoot: true,
          isAutoExpand: true
        },
      ];
      this.oneLevelExpandKeys = ["49__@@__1"];
      this.cloneCurrentList = cloneDeep(this.currentList);
      this.dataMap = Object.freeze(this.dataMap);
      this.flatNodeList = Object.freeze(this.flatNodeList);
      this.loading = false;
    },
    currentHandler(row) {
      this.$refs["tableRef"].setCurrentRow(row);
    },
  },
};
</script>

<style>
/* .cell {
  display: flex;
  align-items: center;
  overflow: unset !important;
} */

/* .el-table .el-table__cell {
  position: unset;
  padding: 6px 0 !important;
} */

.visual-table {
  width: 100%;
  height: calc(100vh - 60px);
  border: 1px solid #eee;
  border-radius: 4px;
}
</style>
