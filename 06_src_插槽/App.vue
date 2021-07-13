<template>
  <div id="app">
    <!-- <Demo title="游戏">
      <ul>
        <li v-for="item in gameArr" :key="item.id">{{item.name}}</li>
      </ul>
    </Demo>

    <Demo title="美食">
      <ul>
        <li v-for="item in foodArr" :key="item.id">{{item.name}}</li>
      </ul>
    </Demo> -->


    <!-- 命名插槽的使用 -->
    <Demo title="游戏">
      <template v-slot:game>
        <ul>
          <li v-for="item in gameArr" :key="item.id">{{item.name}}</li>
        </ul>
      </template>
    </Demo>

    <Demo title="美食">
      <template v-slot:food>
        <ul>
          <li v-for="item in foodArr" :key="item.id">{{item.name}}</li>
        </ul>
      </template>
    </Demo>
  </div>
</template>

<script>
import Demo from './components/Demo.vue'

export default {
  name: 'App',
  components: {
    Demo,
  },
  data () {
    return {
      gameArr:[
        {
          id:'001',
          name:'王者荣耀'
        },
        {
          id:'002',
          name:'阴阳师'
        },
        {
          id:'003',
          name:'英雄联盟'
        },
      ],
      foodArr:[
        {
          id:'0001',
          name:'汉堡'
        },
        {
          id:'0002',
          name:'包子'
        },
        {
          id:'0003',
          name:'烤串'
        },
      ]
    }
  }
}
</script>

<style>
  #app{
		display: flex;
		justify-content: space-around;
	}
</style>
