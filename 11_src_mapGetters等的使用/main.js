import Vue from 'vue'
import App from './App.vue'
// 引入store
import store from './store/index'
Vue.config.productionTip = false

// 注册事件总线
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
