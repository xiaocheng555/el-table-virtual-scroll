<template>
  <div class="ulAll">
    <div class="tabxiangmu">
      <ul>
        <li :class="{'tabAclive':activeIndex1===1}" @click="changeTab(1)">表格1</li>
        <li :class="{'tabAclive':activeIndex1===2}" @click="changeTab(2)">表格2</li>
        <li :class="{'tabAclive':activeIndex1===3}" @click="changeTab(3)">表格3</li>
        <li :class="{'tabAclive':activeIndex1===4}" @click="changeTab(4)">表格4</li>
      </ul>
    </div>

    <div style="height: calc(100% - 50px);width: 100%;">
      <BasicDemo ref="powerBreakRef" v-show="showTeb1==='1'"></BasicDemo>
      <CaseDemo ref="powerWorkErrorRef" v-show="showTeb1==='2'"></CaseDemo>
      <ExpandDemo  ref="powerCheckWorkRef" v-show="showTeb1==='3'"></ExpandDemo>
      <FixedDemo ref="powerRiskAnalyseRef" v-show="showTeb1==='4'"></FixedDemo>
    </div>
  </div>
</template>

<script>
import BasicDemo from './BasicDemo.vue'
import CaseDemo from './CaseDemo.vue'
import ExpandDemo from './ExpandDemo.vue'
import FixedDemo from './FixedDemo.vue'
export default {
  components: {
    BasicDemo, CaseDemo, ExpandDemo, FixedDemo
  },
  data () {
    return {
      showTeb1: '1',
      activeIndex1: 1,
    }
  },

  created () {
  },
  mounted () {
  },

  unmounted () {
  },
  methods: {
    show(data){
      console.log(data);
    },
    changeTab (index) {
      var that = this
      that.activeIndex1 = index
      if (index === 1) {
        that.showTeb1 = '1'
      } else if (index === 2) {
        that.showTeb1 = '2'
      } else if (index === 3) {
        that.showTeb1 = '3'
      } else if (index === 4) {
        that.showTeb1 = '4'
      }
    }
  }
}
</script>

<style lang="less" scoped>
/* ------------新增----------*/
.tabxiangmu {
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  display: flex;
}

.tabxiangmu ul {
  display: flex;
  width: 660px;
  height: 40px;
  border: 1px solid #0270AF;
  justify-content: space-around;
  border-radius: 8px;
  background: #076490;
}
.tabxiangmu ul li {
  list-style: none;
  line-height: 40px;
  color: #fff;
  text-align: center;
  width: 33.3%;
  cursor: pointer;
}
.tabAclive {
  background: #0270AF;
  border-radius: 8px;
  color: yellow !important;
}

ul {
  display: block;
  list-style-type: disc;
  -webkit-padding-start: 0px;
}
.ulAll{
  width: 100%;
  height: 100%;
}

</style>

