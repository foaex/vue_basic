<template>
	<div class="container">
		<h2>我是Home组件</h2>
		<!-- <router-link to="/home/news">新闻</router-link>
		<router-link to="/home/message">消息</router-link> -->
		<button @click="btnClick">新闻</button>
		<button @click="messageClick">消息</button>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	components: {

	},
	methods: {
		btnClick(){
			this.$router.push('/home/news')
		},
		messageClick(){
			this.$router.push('/home/message')
		}
	},
}
</script>

<style scoped >

</style>
