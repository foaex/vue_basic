<template>
  <div class="todo-header">
    <input type="text"
           placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add($event)"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
			
    }
  },
	props:['addTodo'],
	methods: {
		// 添加一个代办事项
		add(event){
			const {value} = event.target
			if(!value.trim()){
				return alert('不能为空')
			}
			const todoObj = {
				id:Date.now(),
				name:value,
				done:false
			}
			this.addTodo(todoObj)
			event.target.value = ''
		}
	},
}
</script>

<style scoped >
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
