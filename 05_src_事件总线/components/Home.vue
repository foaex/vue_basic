<template>
	<div class="container">
		<h2>Home组件</h2>
		<div>
			<h4>收到了来自Demo的数据:</h4>
			<ul>
				<li v-for="item in arr" :key="item.id">{{item.name}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			arr:[]
		}
	},
	mounted() {
		// 监听到了sendData事件 从而调用了showData方法
		this.$bus.$on('sendData',this.showData)
	},
	methods: {
		showData(data){
			this.arr=data
		}
	},
}
</script>

<style scoped >

</style>
