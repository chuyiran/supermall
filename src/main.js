import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入移动端适配插件
import  'lib-flexible'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
