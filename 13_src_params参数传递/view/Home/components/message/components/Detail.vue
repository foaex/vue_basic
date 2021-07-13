<template>
  <div class="container">
    <ul>
      <li>ID:{{paramsInfo.id}}</li>
      <li>TITLE:{{paramsInfo.title}}</li>
      <li>CONTENT:{{paramsInfo.content}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      paramsInfo: {}
    }
  },
  components: {

  },
  mounted () {
    this.paramsInfo = { ...this.paramsInfo, ...this.$route.params }
  },
	watch:{
		'$route' (val){
			this.paramsInfo = {...this.paramsInfo,...val.params}
		}
	}
}
</script>

<style scoped >
</style>
