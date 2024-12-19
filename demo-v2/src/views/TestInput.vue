<template>
<div>
<virtual-scroll
        :data="tableData"
        :item-size="62"
        key-prop="id"
        style="height:calc(80vh - 55px - 25px)"
        @change="onChange"
      >
          <el-table row-key="id" :data="virtualList" height="100%">
            <el-table-column prop="id" label="序号" align="center" width="60" fixed="left"></el-table-column>
            <el-table-column prop="text" label="aaa" min-width="200" align="center" fixed="left">
              <template slot-scope="scope">
                <el-input v-model="scope.row.text" size="mini" placeholder="请输入"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="text" label="aaa" min-width="200" align="center" fixed="left">
              <template slot-scope="scope">
                <el-input v-model="scope.row.text" size="mini" placeholder="请输入"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="text" label="aaa" min-width="200" align="center" fixed="left">
              <template slot-scope="scope">
                <el-input v-model="scope.row.text" size="mini" placeholder="请输入"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="select" label="bbb" min-width="200" align="center" fixed="left">
              <template slot-scope="scope">
                <el-select v-model="scope.row.select" size="mini" placeholder="请选择">
                  <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
                </el-select>
              </template>
            </el-table-column>
          </el-table>
        </virtual-scroll>
</div>
</template>
<script>
import VirtualScroll from 'el-table-virtual-scroll'
export default {
  components: { VirtualScroll },
  data () {
    return {
      tableData: [],
      virtualList: [],
      options: ['111', '222', '333']
    }
  },
  mounted () {
    this.renderTest()
  },
  methods: {
    renderTest () {
      for (let i = 0; i < 200; i++) {
        this.tableData.push({
          id: i,
          text: '',
          select: ''
        })
      }
    },
    onChange (renderData) {
      // console.log('bbb', renderData)
      this.virtualList = renderData
    }
  }
}
</script>
