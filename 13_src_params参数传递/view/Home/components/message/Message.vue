<template>
	<div>
		<ul>
			<li v-for="msg in messageArr" :key="msg.id">
				<!-- 动态路由 params参数传递 用模板字符串拼接要传递的参数-->
				<!-- 在router文件中 要配置相应的映射关系  { path: 'detail/:id', component: Detail }-->
				<!-- 那么在Detail组件中 用this.$route.params可以拿到 -->
				<router-link :to="`/home/message/detail/${msg.id}/${msg.title}/${msg.content}`">{{msg.title}}</router-link>
			</li>
		</ul>
		<hr/>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Message',
		data(){
			return {
				messageArr:[
					{id:'001',title:'消息1',content:'爱抽烟'},
					{id:'002',title:'消息2',content:'爱喝酒'},
					{id:'003',title:'消息3',content:'爱打麻将'},
				]
			}
		}
	}
</script>
