<template>
  <div class="test">
    <el-table
      :data="tableData1"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column
        prop="id"
        label="id"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
        column-key="date"
        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-06', value: '2016-05-06'}]"
        :filter-method="filterHandler">
      </el-table-column>
      <el-table-column
        prop="name"
        sortable
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column label="操作" width="260">
        <template slot-scope="{ row }">
          {{ row.id }}
          <el-button @click="onDel(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="reset">reset</el-button>
  </div>
</template>
  <script>
    export default {
      data() {
        return {
          tableData1: [{
            id: 1,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            id: 2,
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            id: 3,
            date: '2016-05-06',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            hasChildren: true,
            children: [{
                id: 39,
                date: '2016-05-05',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }]
          }, {
            id: 4,
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            children: [
              {
                id: 36,
                date: '2016-05-05',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                id: 37,
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }
            ]
          }]
        }
      },
      methods: {
        load(tree, treeNode, resolve) {
          console.log(tree, treeNode.loading, '====')
          setTimeout(() => {
            resolve([
              {
                id: 32,
                date: '2016-05-05',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                id: 31,
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }
            ])
          }, 1000)
        },
        filterHandler(value, row, column) {
          const property = column['property'];
          return row[property] === value;
        },
        onDel (curRow, list = this.tableData1) {
          console.log('onDel', list)
          list.forEach((row, index) => {
            if (row === curRow) {
              list.splice(index, 1)
            } else {
              this.onDel(curRow, row.children || [])
            }
          })
        },
        reset () {
          this.tableData1 = JSON.parse(this._tableData1)
        }
      },
      created () {
        this._tableData1 = JSON.stringify(this.tableData1)
      }
    }
  </script>
