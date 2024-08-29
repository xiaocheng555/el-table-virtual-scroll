import Vue from 'vue'
import Router from 'vue-router'

// 获取路由
function getRoutes () {
  const files = import.meta.glob('./views/**/*.vue', { eager: false })
  return Object.keys(files).map((path) => {
    const name = path.replace(/^\.\/views\/(.*)\.\w+$/, '$1')
    return {
      name,
      path: '/' + name,
      component: files[path]
    }
  })
}

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/CaseDemo'
  },
  ...getRoutes()
]
const router = new Router({
  routes
})

export default router
