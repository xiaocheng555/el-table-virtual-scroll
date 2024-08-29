<template>
  <div>
    <virtual-scroll
      ref="virtualScroll"
      :data="list"
      :item-size="62"
      key-prop="id"
      @change="(virtualList) => tableData = virtualList">
      <el-table
        :data="tableData"
        height="600"
        row-key="id"
        style="width: 100%">
        <VirtualColumn
          prop="date"
          label="日期"
          width="150">
        </VirtualColumn>
        <VirtualColumn label="配送信息">
          <VirtualColumn
            prop="name"
            label="姓名"
            width="120">
          </VirtualColumn>
          <VirtualColumn label="地址">
            <VirtualColumn
              show-overflow-tooltip
              class-name="text"
              :formatter="formatter"
              label-class-name="label1"
              align="left"
              prop="text"
              label="text"
              min-width="120">
            </VirtualColumn>
            <VirtualColumn
              show-overflow-tooltip
              :formatter="formatter"
              prop="text"
              label="text"
              min-width="120">
            </VirtualColumn>
            <VirtualColumn
              prop="city"
              label="市区"
              width="120">
            </VirtualColumn>
            <VirtualColumn
              prop="address"
              label="地址"
              width="300">
            </VirtualColumn>
            <VirtualColumn
              class-name="yz"
              align="right"
              header-align="center"
              prop="zip"
              label="邮编"
              width="120">
            </VirtualColumn>
            <VirtualColumn
              label="详情"
              align="right"
              header-align="center"
              class-name="detail"
              label-class-name="label2">
              <template v-slot="{ row }">
                <div>{{ row.text2 }}</div>
              </template>
            </VirtualColumn>
          </VirtualColumn>
          <VirtualColumn label="test">
            <template #default="{ row }">
              <!-- 非空判断后就能正常显示 -->
              {{ row.text }}
            </template>
          </VirtualColumn>
        </VirtualColumn>
      </el-table>
    </virtual-scroll>
  </div>
</template>

<script>
import VirtualScroll, { VirtualColumn } from 'el-table-virtual-scroll'
import { mockData } from '@/utils'

export default {
  components: {
    VirtualScroll,
    VirtualColumn
  },
  data () {
    return {
      list: [],
      tableData: []
    }
  },
  methods: {
    formatter (row, column, value) {
      return `${row.id} 姓名：${value}`
    }
  },
  created () {
    setTimeout(() => {
      this.list = mockData(0, 2000)
    }, 1000)
  }
}
</script>

<style lang='less' scoped>

</style>
