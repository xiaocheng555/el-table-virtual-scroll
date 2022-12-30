import Vue from 'vue'
import Router from 'vue-router'

// 获取路由
function getRoutes () {
  const files = require.context('./views', true, /\.vue$/, 'lazy')
  return files.keys().map((path) => {
    const name = path.replace(/^\.\/(.*)\.\w+$/, '$1')
    return {
      name,
      path: '/' + name,
      component: () => files(path)
    }
  }, {})
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