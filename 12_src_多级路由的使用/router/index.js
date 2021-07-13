/* 该文件是Vue中路由器文件，路由器管理着所有路由 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/Home/Home.vue'
import About from '../view/About.vue'
import Messsage from '../view/Home/components/message/Message.vue'
import News from '../view/Home/components/News.vue'
import Detail from '../view/Home/components/message/components/Detail.vue'
Vue.use(VueRouter)

//创建一个路由器，管理所有的路由
const router = new VueRouter({
	routes:[
		{
			path:'/home',
			component:Home,
			children:[
				{
					path:'message',
					component:Messsage,
					children:[
						{
							path:'detail',
							component:Detail
						}
					]
				},
				{
					path:'news',
					component:News
				}
			]
		},
		{
			path:'/about',
			component:About
		}
	]
})

//暴露路由器
export default router