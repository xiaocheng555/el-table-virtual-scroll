<template>
  <div>
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
        row-key="id">
        <el-table-column label="id" prop="id" class-name="el-table__row--level">
          <template slot-scope="{row}">
            <span class="el-table__indent" :style="{ paddingLeft: `${row.level * 16}px` }"></span>
            <div
              v-if="row.hasChildren"
              class="el-table__expand-icon"
              :class="row.expanded ? 'el-table__expand-icon--expanded' : ''"
              @click="onExpand(row)">
              <i class="el-icon-loading" v-if="row.loading"></i>
              <i class="el-icon-arrow-right" v-else></i>
            </div>
            <span v-else class="el-table__placeholder"></span>
            {{row.id}}
          </template>
        </el-table-column>
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
      tableData: [],
      count: 3000
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
            text,
            text2,
            // 以下字段用来模拟树结构加载
            hasChildren: true, // 是否有子节点
            expanded: false, // 节点是否展开
            loading: false, // 节点loading状态
            loaded: false, // 节点是否已经加载完成
            level: 1, // 当前节点的树层级
            hideNodes: [] // 隐藏的子孙节点，用于节点收起
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
    // 展开收起事件
    onExpand (row) {
      row.expanded = !row.expanded
      if (row.expanded) {
        this.loadChildNodes(row)
      } else {
        this.hideChildNodes(row)
      }
    },
    // 加载子节点
    loadChildNodes (row) {
      // 如果已经加载，则显示隐藏的字节点
      if (row.loaded) {
        const index = this.list.findIndex(item => item === row)
        if (index > -1) {
          this.list.splice(index + 1, 0, ...row.hideNodes)
        }
        return
      }

      // 获取子节点数据并显示
      row.loading = true
      setTimeout(() => {
        row.loading = false
        row.loaded = true

        const data = []
        for (let i = 0; i < 10; i++) {
          data.push({
            id: this.count++,
            show: false,
            text: this.getRandomContent(),
            text2: this.getRandomContent(),
            hasChildren: row.level > 3 ? false : true,
            expanded: false,
            loading: false,
            level: row.level + 1,
            hideNodes: []
          })
        }

        // 所有子节点插入到当前同级节点下
        const index = this.list.findIndex(item => item === row)
        if (index > -1) {
          this.list.splice(index + 1, 0, ...data)
        }
      }, 1000)
    },
    // 隐藏子节点
    hideChildNodes (row) {
      const index = this.list.findIndex(item => item === row)
      if (index === -1) return

      // 查找当前节点的所有子孙节点
      const hideNodes = []
      for (let i = index + 1; i < this.list.length; i++) {
        const curRow = this.list[i]
        if (curRow.level <= row.level) break
        hideNodes.push(curRow)
      }
      row.hideNodes = hideNodes
      // 隐藏所有子孙节点
      this.list = this.list.filter(item => !hideNodes.includes(item))
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style lang='less' scoped>

</style>
