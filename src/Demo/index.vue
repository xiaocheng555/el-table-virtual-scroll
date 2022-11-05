<template>
  <div>
    <el-tabs v-model="curTab">
      <el-tab-pane 
        v-for="tab in tabs"
        :label="tab.label" 
        :name="tab.name" 
        :key="tab.name">
        <component v-if="tab.name === curTab" :is="tab.name" v-bind:list="list"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BasicDemo from './BasicDemo.vue'
import FixedDemo from './FixedDemo.vue'
import HeaderDemo from './HeaderDemo.vue'
import SelectionDemo from './SelectionDemo.vue'
import LoadmoreDemo from './LoadmoreDemo.vue'
import CaseDemo from './CaseDemo.vue'
import ExpandDemo from './ExpandDemo.vue'
import RadioDemo from './RadioDemo.vue'
import SortDemo from './SortDemo.vue'
import HeightDemo from './HeightDemo.vue'
import ScrollerDemo from './ScrollerDemo.vue'
    
function genRandomVal (min, max) { 
  return Math.floor(Math.random() * (max - min)) + min 
} 

export default {
  name: 'demo-list',
  components: {
    BasicDemo,
    FixedDemo,
    HeaderDemo,
    SelectionDemo,
    LoadmoreDemo,
    CaseDemo,
    ExpandDemo,
    RadioDemo,
    SortDemo,
    HeightDemo,
    ScrollerDemo
  },
  data () {
    return {
      list: [],
      curTab: 'CaseDemo',
      tabs: [
        {
          label: '案例',
          name: 'CaseDemo'
        },
        {
          label: '基础表格',
          name: 'BasicDemo'
        },
        {
          label: '固定表格',
          name: 'FixedDemo'
        },
        {
          label: '多表头',
          name: 'HeaderDemo'
        },
        {
          label: '单选',
          name: 'RadioDemo'
        },
        {
          label: '多选',
          name: 'SelectionDemo'
        },
        {
          label: '下拉加载',
          name: 'LoadmoreDemo'
        },
        {
          label: '扩展行',
          name: 'ExpandDemo'
        },
        {
          label: '排序',
          name: 'SortDemo'
        },
        {
          label: '表格不固定高度',
          name: 'HeightDemo'
        },
        {
          label: '指定滚动容器',
          name: 'ScrollerDemo'
        }
      ]
    }
  },
  methods: {
    fetchData () {
      this.list = []
      setTimeout(() => {
        console.log(1)
        this.list = []
        for (let i = 0; i < 2000; i++) {
          const text = this.getRandomContent()
          const text2 = this.getRandomContent()
          this.list.push({
            index: i,
            id: i,
            show: false,
            text,
            text2,
            checked: false,
            date: new Date().toLocaleString(),
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            shop: '王小虎夫妻店',
            shopId: '10333',
            radioCheck: false,
            count: genRandomVal(0, 1000)
          })
        }
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
  created () {
    this.fetchData()
  }
}
</script>

<style lang='less' scoped>
</style>