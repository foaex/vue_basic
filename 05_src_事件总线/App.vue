<template>
  <div id="app">
    <Demo/>
    <Home/>
  </div>
</template>

<script>
import Demo from './components/Demo.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Demo,
    Home
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
