<template>
  <el-container class="layout-container">
    <el-header class="layout-header">
      <i v-if="isMenuDrawer" class="menu-trigger el-icon-s-unfold" @click="openMenu"></i>
      <h1 class="layout-logo">el-table-virtual-scroll</h1>
      <div class="layout-header-right">
        <a href="https://github.com/xiaocheng555/el-table-virtual-scroll" target="_blank">
          <svg t="1671785616712" class="github-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2682" width="32" height="32"><path d="M950.857143 512q0 143.428571-83.714286 258T650.857143 928.571429q-15.428571 2.857143-22.571429-4t-7.142857-17.142858v-120.571428q0-55.428571-29.714286-81.142857 32.571429-3.428571 58.571429-10.285715t53.714286-22.285714 46.285714-38 30.285714-60T792 489.142857q0-69.142857-45.142857-117.714286 21.142857-52-4.571429-116.571428-16-5.142857-46.285714 6.285714t-52.571429 25.142857l-21.714285 13.714286q-53.142857-14.857143-109.714286-14.857143t-109.714286 14.857143q-9.142857-6.285714-24.285714-15.428571T330.285714 262.571429 281.142857 254.857143q-25.142857 64.571429-4 116.571428-45.142857 48.571429-45.142857 117.714286 0 48.571429 11.714286 85.714286t30 60 46 38.285714 53.714285 22.285714 58.571429 10.285715q-22.857143 20.571429-28 58.857143-12 5.714286-25.714286 8.571428t-32.571428 2.857143-37.428572-12.285714T276.571429 728q-10.857143-18.285714-27.714286-29.714286t-28.285714-13.714285l-11.428572-1.714286q-12 0-16.571428 2.571428t-2.857143 6.571429 5.142857 8 7.428571 6.857143l4 2.857143q12.571429 5.714286 24.857143 21.714285t18 29.142858l5.714286 13.142857q7.428571 21.714286 25.142857 35.142857t38.285714 17.142857 39.714286 4 31.714286-2l13.142857-2.285714q0 21.714286 0.285714 50.857143t0.285714 30.857142q0 10.285714-7.428571 17.142858t-22.857143 4q-132.571429-44-216.285714-158.571429T73.142857 512q0-119.428571 58.857143-220.285714T291.714286 132 512 73.142857t220.285714 58.857143T892 291.714286 950.857143 512z" p-id="2683"></path></svg>
        </a>
      </div>
    </el-header>
    
    <el-container class="layout-main">
      <el-drawer
        v-if="isMenuDrawer"
        direction='ltr'
        size='70%'
        append-to-body
        :visible.sync="asideOpened"
        custom-class="drawer-aside">
        <el-menu :default-active="activePath" router>
          <template v-for="menu in menus">
            <div class="menu-group-title" v-if="(typeof menu === 'string')" :key="menu">{{menu}}</div>
            <el-menu-item 
              v-else
              :index="menu.path" 
              :key="menu.path">
              {{menu.title}}
            </el-menu-item>
          </template>
        </el-menu>
      </el-drawer>
      <el-aside
        v-show="!isMenuDrawer"
        width="260px" 
        class="layout-aside">
        <el-menu :default-active="activePath" router>
          <template v-for="menu in menus">
            <div class="menu-group-title" v-if="(typeof menu === 'string')" :key="menu">{{menu}}</div>
            <el-menu-item 
              v-else
              :index="menu.path" 
              :key="menu.path">
              {{menu.title}}
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main class="layout-body">
        <slot></slot>
      </el-main>
    </el-container>
    
    <Preview class="code-preview" v-if="!isMenuDrawer"></Preview>
  </el-container>
</template>

<script>
const Preview = () => import('./Preview') 

export default {
  components: {
    Preview
  },
  data () {
    return {
      asideOpened: true,
      menus: [
        '基础',
        { 
          path: '/CaseDemo',  
          title: '案例'
        },
        {
          title: '表格不固定高度',
          path: '/HeightDemo'
        },
        {
          title: '指定滚动容器',
          path: '/ScrollerDemo'
        },
        {
          title: '下拉加载',
          path: '/LoadmoreDemo'
        },
        {
          title: '下拉加载2',
          path: '/LoadmoreDemo2'
        },
        {
          title: '固定行高',
          path: '/UndynamicDemo'
        },
        {
          title: '基础表格',
          path: '/BasicDemo'
        },
        {
          title: '固定表格',
          path: '/FixedDemo'
        },
        {
          title: '多表头',
          path: '/HeaderDemo'
        },
        {
          title: '树结构懒加载',
          path: '/TreeDemo'
        },
        
        '兼容',
        {
          title: '单选',
          path: '/VRadioDemo'
        },
        {
          title: '多选',
          path: '/VSelectionDemo'
        },
        {
          title: '索引',
          path: '/VIndex'
        },
        {
          title: '扩展行',
          path: '/VExpandDemo'
        },
        {
          title: '模拟树结构懒加载',
          path: '/VTreeDemo'
        },
        
        '其他写法',
        {
          title: '单选',
          path: '/RadioDemo'
        },
        {
          title: '多选',
          path: '/SelectionDemo'
        },
        {
          title: '扩展行',
          path: '/ExpandDemo'
        },
        {
          title: '模拟树结构懒加载',
          path: '/TreeDemo2'
        },
        {
          title: '排序',
          path: '/SortDemo'
        }
      ]
    }
  },
  computed: {
    isMenuDrawer () {
      return this.$vSize.isXs
    }
  },
  methods: {
    onMenuClick (menu) {
      this.$router.push({
        path: menu.path
      })
    },
    openMenu () {
      this.asideOpened = true
    }
  },
  watch: {
    '$route.path': {
      immediate: true,
      handler (val) {
        this.asideOpened = false
        this.activePath = val
        const curMenu = this.menus.find(menu => menu.path === val)
        if (curMenu) {
          const code = curMenu.path.replace('/', '')
          if  (code === this.$route.query.code) return
          this.$router.replace({
            query: {
              code: code,
              codeTitle: curMenu.title
            }
          })
        }
      }
    }
  },
  created () {}
}
</script>

<style lang='less'>
.drawer-aside {
  .el-drawer__header {
    margin-bottom: 0;
  }
  .el-drawer__body {
    padding-top: 0;
  }
  .el-menu {
    position: relative;
    margin-top: 0;
    z-index: 100;
  }
}
</style>

<style lang='less' scoped>
.layout-container {
  height: 100%; 
  border: 1px solid #eee
}
.layout-header {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #eee;
}
.menu-trigger {
  margin-right: 8px;
  font-size: 22px;
  color: #444;
  cursor: pointer;
}
.layout-header-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.layout-logo {
  flex: 1;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid #eee;
}
.layout-aside {
  height: 100%;
  padding-left: 10px;
  border-right: 1px solid #eee;
  background-color: #fff;
  :deep(.el-menu) {
    border-right: none;
  }
}
.layout-main {
  overflow: auto;
}
.menu-group-title {
  font-size: 16px;
  margin-top: 15px;
  color: #333;
  padding: 20px 13px 3px;
  font-weight: 600;
}
:deep(.el-menu-item) {
  height: 42px;
  &:hover {
    color: #409EFF;
  }
  &:hover,
  &:focus {
    background-color: #fff !important;
  }
}
.code-preview {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>