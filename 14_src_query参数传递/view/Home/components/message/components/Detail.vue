<template>
  <div class="container">
    <ul>
      <li>ID:{{id}}</li>
      <li>TITLE:{{title}}</li>
      <li>CONTENT:{{content}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // paramsInfo: {}
    }
  },
  components: {

  },
  /* mounted () {
    this.paramsInfo = { ...this.paramsInfo, ...this.$route.params }
  },
	watch:{
		'$route' (val){
			this.paramsInfo = {...this.paramsInfo,...val.params}
		}
	} */


  // 用计算属性来获取路由参数
  computed:{
    id(){
      return this.$route.query.id
    },
    title(){
      return this.$route.query.title
    },
    content(){
      return this.$route.query.content
    }
  }
}
</script>

<style scoped >
</style>
