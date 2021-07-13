<template>
	<div class="container">
		<h2>当前求和为：{{total}}</h2>
		<h3>当前求和扩大100倍是：{{dahe}}</h3>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>&nbsp;
		<button @click="decrement(n)">-</button>&nbsp;
		<button @click="incrementOdd(n)">奇数加</button>&nbsp;
		<button @click="incrementAsync(n)">异步加</button>&nbsp;
	</div>
</template>

<script>
import { mapState, mapGetters,mapMutations,mapActions } from "vuex"
export default {
	data() {
		return {
			// 获取到下拉框选择的值
			n:1
		}
	},
	computed:{
		// mapState是读取vuex中的state 需要对象或者数组作为参数 会自动生成计算属性方法
		...mapState({
			// total 控制的是模板中读取的属性 'sum'控制的是读取state中的sum属性
			total:'sum'
			/* 
				那么这个 <h2>当前求和为：{{$store.state.sum}}</h2> 可以替换为 <h2>当前求和为：{{total}}</h2>
				如果两个名字一样 
				...mapState({
					sum:'sum'
				})
				就可以简写 ...mapState(['sum'])
			*/
		}),

		// mapGetters是读取vuex中的getters方法 用法和mapState一样
		...mapGetters({
			dahe:'bigSum'
		})
	},
	methods: {
		/* 
				这里可以用mapMutations和mapActions来生成相应的方法 不过要携带参数 否则会出错
		*/
		//靠mapMutations生成increment函数，和mutations中的JIA对话，完成加
		//靠mapMutations生成decrement函数，和mutations中的JIAN对话，完成减
		/* 注意靠mapMutations生成方法要给函数传一个参数 因为mapMutations生成的函数已经封装了会接收一个参数 所以必须要传参数  */
		...mapMutations({
			increment:'INCREMENT',
			decrement:'DECREMENT'
		}),
		//靠自己写increment方法，和mutations中的JIA对话，完成加
		//靠自己写decrement方法，和mutations中的JIAN对话，完成减
		/* 
			increment(){
				// 向store中的actions发送increment事件 要在actions中接收
				// this.$store.dispatch('increment',this.n)
				// 由于把actions中没有想对应的事件 所以可以在这里直接和mutation对话
				this.$store.commit('INCREMENT',this.n)
			}, 
			decrement(){
				// 向store中的actions发送decrement事件 要在actions中接收
				// this.$store.dispatch('decrement',this.n)
				// 由于把actions中没有想对应的事件 所以可以在这里直接和mutation对话
				this.$store.commit('DECREMENT',this.n)
			},
		*/
		/* -------------------------------------------------------------------------------------------------------------- */
		//靠mapActions生成incrementOdd方法，和actions中的incrementOdd对话，完成奇数加
		//靠mapActions生成incrementAsync方法，和actions中的incrementAsync对话，完成异步加
		//若回调名和actions中的动作名是一致的，则可以简写一个数组
		...mapActions(['incrementOdd','incrementAsync']),
		//靠自己写incrementOdd方法，和actions中的incrementOdd对话，完成奇数加
		//靠自己写incrementAsync方法，和actions中的incrementAsync对话，完成异步加
		/* 
			incrementOdd(){
				// 向store中的actions发送incrementOdd事件 要在actions中接收
				this.$store.dispatch('incrementOdd',this.n)
			}, 
			incrementAsync(){
				// 向store中的actions发送incrementAsync事件 要在actions中接收
				this.$store.dispatch('incrementAsync',this.n)
			},
		*/
	},
}
</script>

<style scoped >

</style>
