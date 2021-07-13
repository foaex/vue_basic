<template>
	<div class="container">
		<h2>Demo组件</h2>
		<button @click="send">发送数据</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			goodsArr:[
				{
					id:'001',
					name:'水果'
				},
				{
					id:'002',
					name:'蔬菜'
				},
				{
					id:'003',
					name:'粮油'
				}
			]
		}
	},
	// mounted() {
	// 	this.$bus.$emit('sendData',this.goodsArr)
	// },
	methods: {
		send(){
			// 点击按钮触发了sendData事件 那么在this.$bus.$on中就会监听到sendData已经触发 从而调用回调函数
			this.$bus.$emit('sendData',this.goodsArr)
		}
	},
}
</script>

<style scoped >

</style>
