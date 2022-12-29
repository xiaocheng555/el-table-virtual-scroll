<template>
  <div>
    <virtual-scroll
      :data="list2"
      :item-size="62"
      key-prop="id"
      @change="(renderData) => virtualList2 = renderData">
      <el-table 
        v-el-table-infinite-scroll="loadMore"
        :class="loading ? 'no-empty' : ''"
        row-key="id" 
        stripe 
        :data="virtualList2"
        height="500px">
        <el-table-column label="id" prop="id"></el-table-column>
        <el-table-column label="内容" prop="text"></el-table-column>
        <el-table-column label="详情">
          <template slot-scope="{ row }">
            <el-button type="text" @click="row.show = !row.show">{{ row.show ? '隐藏' : '显示' }}</el-button>
            <div v-if="row.show">{{ row.text2 }}</div>
          </template>
        </el-table-column>
        <el-table-column label="第n行" prop="id"></el-table-column>
        <el-table-column label="第n行" prop="id"></el-table-column>
        <el-table-column label="第n行" prop="id"></el-table-column>
        <el-table-column label="第n行" prop="id"></el-table-column>
        <el-table-column label="第n行" prop="id"></el-table-column>
        <el-table-column label="操作" width="260">
          <template slot-scope="{ row }">
            {{ row.id }}
            <el-button @click="onDel2(row)">删除</el-button>
            <el-button @click="onEdit2(row)">编辑</el-button>
          </template>
        </el-table-column>
        <div style="text-align: center; padding: 15px; color: #999;" slot="append" v-if="loading">
          加载中...
        </div>
      </el-table>
    </virtual-scroll>
    <b>行数: {{ virtualList2.length }}</b>
  </div>
</template>

<script>
import VirtualScroll from '../el-table-virtual-scroll'
import ElTableInfiniteScroll from 'el-table-infinite-scroll'

export default {
  components: {
    VirtualScroll,
  },
  directives: {
    ElTableInfiniteScroll
  },
  data () {
    return {
      count2: 0,
      list2: [],
      virtualList2: [],
      loading: true
    }
  },
  methods: {
    onEdit (row) {
      row.text =  row.text + '__编辑'
    },
    onDel2 (row) {
      const index = this.list2.findIndex(item => item === row)
      if (index > -1) {
        this.list2.splice(index, 1)
      }
    },
    loadMore () {
      this.loading = true
      setTimeout(() => {
        for (let i = 0; i < 30; i++) {
          this.count2++
          this.list2.push({
            id: this.count2,
            show: false,
            text: this.getRandomContent(),
            text2: this.getRandomContent()
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
    }
  },
  created () {}
}
</script>

<style lang='less' scoped>
:deep(.no-empty) {
  .el-table__empty-block {
    display: none;
  }
}
</style>