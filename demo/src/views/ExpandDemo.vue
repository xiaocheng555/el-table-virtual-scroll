<template>
  <div>
    <virtual-scroll
      ref="virtualScroll"
      :data="list"
      :item-size="62"
      key-prop="id"
      @change="onVirtualChange">
      <el-table
        ref="table"
        :data="tableData"
        height="600"
        row-key="id"
        :class="isExpanding ? 'is-expanding' : ''"
        style="width: 100%"
        :row-class-name="rowClassName"
        @expand-change="onExpandChange">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="所属店铺">
                <span>{{ props.row.shop }}</span>
              </el-form-item>
              <el-form-item label="商品 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.shopId }}</span>
              </el-form-item>
              <el-form-item label="商品分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="商品 ID"
          prop="id">
        </el-table-column>
        <el-table-column
          label="商品名称"
          prop="name">
        </el-table-column>
        <el-table-column
          label="描述"
          prop="desc">
        </el-table-column>
      </el-table>
    </virtual-scroll>
  </div>
</template>

<script>
import VirtualScroll from 'el-table-virtual-scroll'
import { mockData } from '@/utils'

export default {
  components: {
    VirtualScroll
  },
  data () {
    return {
      list: mockData(0, 2000),
      tableData: [],
      expandRows: [],
      isExpanding: false // 手动控制展开时，阻止展开图标抖动
    }
  },
  methods: {
    rowClassName ({row}) {
      return `row_${row.id}`
    },
    async onVirtualChange (virtualList) {
      this.tableData = virtualList
      this.isExpanding = true
      await this.$nextTick()
      this.expandRows.forEach(row => {
        this.$refs.table?.toggleRowExpansion?.(row, true)
      })
      setTimeout(() => {
        this.isExpanding = false
      }, 10)
    },
    onExpandChange (row) {
      const rowEl = document.querySelector(`.row_${row.id}`)
      if (rowEl) {
        const isExpand = !rowEl.className.includes('expanded')
        if (isExpand) {
          if (!this.expandRows.includes(row)) {
            this.expandRows.push(row)
          }
        } else {
          this.expandRows = this.expandRows.filter(expandRow => expandRow !== row)
        }
      }
    }
  }
}
</script>

<style lang='less' scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
:deep(.is-expanding) {
  .el-table__expand-icon {
    transition: none;
  }
}
</style>
