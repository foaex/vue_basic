<template>
	<div class="container">
		<h2>当前求和为：{{$store.state.sum}}</h2>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment">+</button>&nbsp;
		<button @click="decrement">-</button>&nbsp;
		<button @click="incrementOdd">奇数加</button>&nbsp;
		<button @click="incrementAsync">异步加</button>&nbsp;
	</div>
</template>

<script>
export default {
	data() {
		return {
			// 获取到下拉框选择的值
			n:1
		}
	},
	methods: {
		increment(){
			// 向store中的actions发送increment事件 要在actions中接收
			this.$store.dispatch('increment',this.n)
		},
		decrement(){
			// 向store中的actions发送decrement事件 要在actions中接收
			this.$store.dispatch('decrement',this.n)
		},
		incrementOdd(){
			// 向store中的actions发送incrementOdd事件 要在actions中接收
			this.$store.dispatch('incrementOdd',this.n)
		},
		incrementAsync(){
			// 向store中的actions发送incrementAsync事件 要在actions中接收
			this.$store.dispatch('incrementAsync',this.n)
		},
	},
}
</script>

<style scoped >

</style>
