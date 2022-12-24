import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
import router from './router'

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
