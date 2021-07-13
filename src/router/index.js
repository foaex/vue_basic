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
						/* 
							params参数传递
							{
								path:'detail/:id/:title/:content',
								component:Detail
							}, 
						*/

						/* 
							query参数传递
							{
								path:'detail',
								component:Detail
							} 
						*/
						/* 
							命名路由 
							{
								path:'detail/:id/:title/:content',
								component:Detail,
								name:'detail'
							} 
						*/

						// 路由props配置
						{
							path:'detail/:id', //同时接收params和query params参数需要声明接收
							component:Detail,
							name:'detail',
							// props:{id:'001'}  //通过props映射自定义的静态数据
							// props:true //映射params参数为props传给路由组件
							props(route){ // 此处接收到的route是this.$route
								const {id} = route.params
								const {title,content} = route.query
								return {id,title,content}
							}
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