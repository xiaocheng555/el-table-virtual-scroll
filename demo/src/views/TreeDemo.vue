<template>
  <div>
    <el-alert type="warning" title="树结构虚拟滚动只计算一级节点渲染的数据，如果某个一级节点下的子孙节点超级多，仍然会卡顿。（可以模拟树结构懒加载）" show-icon></el-alert>
    <virtual-scroll
      ref="virtualScroll"
      :data="list"
      :item-size="62"
      key-prop="id"
      @change="virtualList => (tableData = virtualList)">
      <el-table
        v-loading="loading"
        :data="tableData"
        height="500px"
        style="width: 100%"
        border
        row-key="id"
        lazy
        :load="onload"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
        @expand-change="updateVirtualScroll">
        <el-table-column label="id" prop="id"></el-table-column>
        <el-table-column label="内容" prop="text"></el-table-column>
        <el-table-column label="内容省略" prop="text" show-overflow-tooltip></el-table-column>
      </el-table>
    </virtual-scroll>
  </div>
</template>

<script>
import VirtualScroll from 'el-table-virtual-scroll'

export default {
  components: {
    VirtualScroll
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
    onload (tree, treeNode, resolve) {
      if (!this.count) this.count = 3000
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve([])
          return
        }

        const data = []
        for (let i = 0; i < 10; i++) {
          data.push({
            id: this.count++,
            show: false,
            text: this.getRandomContent(),
            text2: this.getRandomContent(),
            hasChildren: true
          })
        }
        resolve(data)
      }, 1000)
    },
    // 由于树节点（已展开）突然收起时，会出现的当前渲染的表格行不能满屏情况，需要更新virtualList组件，重新计算需要渲染的数据
    updateVirtualScroll () {
      this.$refs.virtualScroll.update()
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style lang='less' scoped>

</style>
