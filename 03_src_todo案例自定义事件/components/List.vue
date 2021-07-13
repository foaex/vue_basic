<template>
  <ul class="todo-main">
    <Item v-for="item in todos"
          :key="item.id"
          :item="item"
          @change-item='changeCheckItem'
          @delete-item='deleteTodo' />
  </ul>
</template>

<script>
import Item from './Item.vue'
export default {
  data () {
    return {

    }
  },
  // props: ['todos', 'changeChecked', 'deleteTodo'],
	props: ['todos'],
  components: {
    Item
  },
	methods: {
		// Item组件触发了change-item方法 所以调用changeCheckItem方法 向App组件发射了一个change-checked事件
		changeCheckItem(id,done){
			this.$emit('change-checked',id,done)
		},
		// Item组件触发了delete-item方法 所以调用deleteTodo方法 向App组件发射了一个delete-todo事件
		deleteTodo(id){
			this.$emit('delete-todo',id)
		}
	},
}
</script>

<style scoped >
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
