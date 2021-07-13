<template>
<div id="app">
  <router-link to='/home' tag="button">首页</router-link>
  <router-link to='/about' tag="button">关于</router-link>
  <Demo />
  <router-view></router-view>
</div>
</template>

<script>
import Demo from './components/demo.vue'

export default {
  name: 'App',
  components: {
    Demo
  }
}
</script>

<style>
.active {
  color: #e00;
}
</style>
