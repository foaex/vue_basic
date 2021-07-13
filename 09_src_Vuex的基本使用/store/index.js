//  vuex的使用
/* 
	1 首先下载 vuex---npm install vuex
	2 创建store文件夹 在里面新建index.js
*/
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 初始化状态 state 是一个对象 里面保存着要记录的状态数据
const state = {
	// 记录一个求和数据 sum 初始化为 0
	sum:0
}

// actions里面保存着一些指令函数 必须是对象形式
const actions = {
	increment(context,value){
		// context是一个迷你版的store value是Count组件中increament事件传递过来的 n
		// console.log(context,value);

		// action向mutation提交一个修改的指令 同时把value也传过去了
		context.commit('INCREMENT',value)
	}
}

// mutations里面试一些具体操作的方法
const mutations = {
	// INCREMENT接收两个参数 一个state 里面保存了一些数据 比如sum
	// 一个value是actions里面的increment方法传过来的
	INCREMENT(state,value){
		// console.log(state,value);
		state.sum += value
	}
}


const store = new Vuex.Store({
	state,
	actions,
	mutations
})

export default store