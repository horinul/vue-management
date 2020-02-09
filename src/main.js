import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

import axios from 'axios'
// 创建一个axios请求实例
// 为了让所有地方都可以访问，所以定义到vue的原型上
// 名字是为了不要重复，所以加上$，
// 所以最后就是可以在界面上的任何地方通过this.$http，访问到axios实例
Vue.prototype.$http=axios.create({
  // 设置接口根地址
  // 作用：就不用再所有请求中都写一遍接口根地址，比较方便
  baseURL:'http://localhost:3001/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
