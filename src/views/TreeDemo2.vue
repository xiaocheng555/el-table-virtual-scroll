<template>
  <div>
    <el-alert type="warning" title="树结构虚拟滚动只计算一级节点渲染的数据，如果某个一级节点下的子孙节点超级多，仍然会卡顿。（可以只用一层结构模拟树结构）" show-icon></el-alert>
    <VirtualScroll
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
        row-key="id">
        <virtual-column label="id" prop="id" type="tree" :load="onload"></virtual-column>
        <el-table-column label="内容" prop="text"></el-table-column>
        <el-table-column label="内容省略" prop="text" show-overflow-tooltip></el-table-column>
      </el-table>
    </VirtualScroll>
  </div>
</template>

<script>
import VirtualScroll from '../el-table-virtual-scroll'
import VirtualColumn from '../el-table-virtual-column'

export default {
  components: {
    VirtualScroll,
    VirtualColumn
  },
  data () {
    return {
      loading: false,
      list: [],
      tableData: []
    }
  },
  methods: {
    fetchData () {
      this.loading = true
      this.list = []
      setTimeout(() => {
        this.list = []
        for (let i = 1; i < 2000; i++) {
          const text = this.getRandomContent()
          const text2 = this.getRandomContent()
          this.list.push({
            id: i,
            show: false,
            text,
            text2,
            hasChildren: true
          })
        }
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
    onload (row, resolve) {
      if (!this.count) this.count = 3000
      setTimeout(() => {
        const data = []
        for (let i = 0; i < 10; i++) {
          data.push({
            id: this.count++,
            show: false,
            text: this.getRandomContent(),
            text2: this.getRandomContent(),
            $hasChildren: true
          })
        }
        resolve(data)
      }, 1000)
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style lang='less' scoped>

</style>