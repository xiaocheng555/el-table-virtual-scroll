<template>
  <div>
    <div>
      <el-select style="width: 100px;" v-model="fixed">
        <el-option :value="undefined" label="不固定"></el-option>
        <el-option :value="'left'" label="固定左边"></el-option>
        <el-option :value="'right'" label="固定右边"></el-option>
      </el-select>
      &nbsp;
      <el-input style="width: 300px;" type="number" placeholder="滚动到第几行" v-model="jumpIndex">
        <el-button slot="append" @click="scrollToRow(jumpIndex)">滚动{{jumpIndex}}</el-button>
      </el-input>
      &nbsp;
      数据总数量：<el-input style="width: 200px;" type="number" placeholder="数据条数" v-model="count"></el-input>
    </div>
    <virtual-scroll
      ref="virtualScroll"
      :data="list"
      :item-size="62"
      key-prop="id"
      @change="onChange">
      <el-table
        v-loading="loading"
        :data="virtualList1"
        stripe
        row-key="id"
        height="600">
        <virtual-column type="selection" width="60"></virtual-column>
        <el-table-column label="id" prop="id"></el-table-column>
        <el-table-column label="内容" width="260" prop="text"></el-table-column>
        <el-table-column label="内容省略" width="260" prop="text" show-overflow-tooltip></el-table-column>
        <el-table-column label="详情" min-width="260">
          <template slot-scope="{ row }">
            <el-button type="text" @click="row.show = !row.show;">{{ row.show ? '隐藏' : '显示' }}</el-button>
            <div v-if="row.show">{{ row.text2 }}</div>
          </template>
        </el-table-column>
        <el-table-column label="一级表头">
          <el-table-column label="第n行" width="400" prop="id"></el-table-column>
          <el-table-column label="第n行" width="400" prop="id"></el-table-column>
          <el-table-column label="第n行" width="400" prop="id"></el-table-column>
        </el-table-column>
        <el-table-column label="操作" :fixed="fixed" width="260">
          <template slot-scope="{ row }">
            {{ row.id }}
            <el-button @click="onDel(row)">删除</el-button>
            <el-button @click="onEdit(row)">编辑</el-button>
          </template>
        </el-table-column>
        <div slot="append">
          <el-divider>到底了~</el-divider>
        </div>
      </el-table>
    </virtual-scroll>
    <b>行数: {{ virtualList1.length }}</b>
  </div>
</template>

<script>
import VirtualScroll from '../el-table-virtual-scroll'
import VirtualColumn from '../el-table-virtual-column'
import { mockData } from '@/utils'

export default {
  components: {
    VirtualScroll,
    VirtualColumn
  },
  data () {
    return {
      count: 2000,
      fixed: undefined,
      jumpIndex: 1999,
      loading: false,
      show: false,
      list: [],
      virtualList1: [],
      isCheckedAll: false,
      isCheckedImn: false
    }
  },
  methods: {
    fetchData () {
      this.loading = true
      this.list = []
      setTimeout(() => {
        this.list = mockData(0, this.count)
        this.loading = false
      }, 1000)
    },
    getRandomContent () {
      const content = [
        '这是一条测试数据',
        '君不见黄河之水天上来，奔流到海不复回。',
        '十年生死两茫茫',
        '寻寻觅觅，冷冷清清，凄凄惨惨戚戚。',
        '桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。',
        '明月几时有，把酒问青天。',
        '槛菊愁烟兰泣露，罗幕轻寒，',
        '寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？',
        '红豆生南国，春来发几枝。',
        '黄鹂'
      ]
      const i = Math.floor(Math.random() * 10)
      return content[i]
    },
    scrollToRow (index) {
      this.$refs.virtualScroll.scrollTo(index)
    },
    onChange (renderData) {
      console.log('onChange')
      this.virtualList1 = renderData
    },
    onDel (row) {
      const index = this.list.findIndex(item => item === row)
      if (index > -1) {
        this.list.splice(index, 1)
      }
    },
    onEdit (row) {
      row.text =  row.text + '__编辑'
    }
  },
  watch: {
    count () {
      this.$refs.virtualScroll?.reset?.()
      this.fetchData()
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style lang='less' scoped>
</style>