<template>
  <li 
		@mouseenter="isShow = true" 
		@mouseleave="isShow = false"
		:class="{'active':isShow}"
	>
    <label>
      <input type="checkbox" :checked="item.done" @click="change(item.id,$event)"/>
      <span>{{item.name}}</span>
    </label>
    <button class="btn btn-danger"
            :style="{display:isShow?'block':'none'}"
						@click="removeTodo(item.id)"
						>删除</button>
  </li>
</template>

<script>
export default {
  data () {
    return {
			isShow:false
    }
  },
	props:['item','changeChecked','deleteTodo'],
  methods: {
		// 修改事件的done值
		change(id,e){
			// console.log(id,e.target.checked);
			this.changeChecked(id,e.target.checked)
		},
		// 删除一个事件 通过id来删除
		removeTodo(id){
			this.deleteTodo(id)
		}
	},
}
</script>

<style scoped >
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
.active{
	background-color: #ddd;
}
</style>
