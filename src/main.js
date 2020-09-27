import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
//引入移动端适配插件
//import './plugs/flexible/flexible'
//定义事件总线
Vue.prototype.$bus=new Vue();
import 'amfe-flexible/index'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

