import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/Home/Home.vue'
import About from '../view/About.vue'
import News from '../view/Home/components/News.vue'
import Message from '../view/Home/components/Message.vue'
Vue.use(VueRouter)
// 创建VueRouter对象
// 配置映射关系
const routes = [
	{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home,
		children: [
			{
				path: 'news',
				component: News
			},
			{
				path: 'message',
				component: Message
			}
		]
	},
	{
		path: '/about',
		component: About
	}
]
const router = new VueRouter({
	routes,
	// 设置路由模式
	mode: 'history',
	linkActiveClass: 'active'
})
export default router