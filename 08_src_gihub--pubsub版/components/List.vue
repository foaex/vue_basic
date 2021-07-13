<template>
  <div class="row">
		<h2 v-show="getInfo.isFirst">欢迎使用</h2>
		<h2 v-show="getInfo.isLoading">Loading...</h2>
		<h2 v-show="getInfo.errMsg">{{getInfo.errMsg}}</h2>
    <div v-show="getInfo.user.length" class="card" v-for="item in getInfo.user" :key="item.id">
      <a :href="item.html_url"
         target="_blank">
        <img :src="item.url"
             style='width: 100px' />
      </a>
      <p class="card-text">{{item.login}}</p>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  data () {
    return {
			getInfo:{
				isFirst:true,
				isLoading:false,
				errMsg:'',
				user:[]
			}
    }
  },
	methods: {
		/* showData(value){
			// 对象解构
			this.getInfo = {...this.getInfo,...value}
		} */

		// pubsub中的回调函数接收两个参数 第一个参数是事件名 可以用占位符代替
		// 第二个参数是传递过来的值
		showData(_,value){
			this.getInfo = {...this.getInfo,...value}
		}
	},
	mounted() {
		// 接收Search发射过来的事件
		// this.$bus.$on('get-info-list',this.showData)

		// 订阅事件
		PubSub.subscribe('get-info-list', this.showData);
	},
}
</script>

<style scoped >
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
