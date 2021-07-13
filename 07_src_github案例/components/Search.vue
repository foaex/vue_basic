<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text"
             placeholder="enter the name you search"
             v-model="keyWords" />&nbsp;<button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      keyWords: ''
    }
  },
	methods: {
		async search(){
			// 请求之前发射事件给List组件
			this.$bus.$emit('get-info-list',{isFirst:false,isLoading:true})
			try {
				const {data:res} = await axios.get('https://api.github.com/search/users',{
					params:{
						q:this.keyWords
					}
				})
				// 请求完之后发射事件给List组件
				this.$bus.$emit('get-info-list',{isLoading:false,user:res.items})
			} catch (error) {
				// 请求出错发射事件给List组件
				this.$bus.$emit('get-info-list',{user:[],errMsg:error.Message})
			}
			this.keyWords = ''
		}
	},
}
</script>

<style scoped >
</style>
