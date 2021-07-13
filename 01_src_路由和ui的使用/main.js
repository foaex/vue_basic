import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
// 导入样式表
import 'element-ui/lib/theme-chalk/index.css'
// 导入element所需要的组件
import './plugins/element'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
