import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'
import VueResponseSize from 'vue-response-size'

Vue.config.productionTip = true
Vue.config.devtools = true // 生产开启调试

Vue.use(ElementUI)
Vue.use(VueResponseSize)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
