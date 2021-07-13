<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox"
             v-model="allChecked" />
    </label>
    <span>
      <span>已完成 {{isDone}}</span> / 全部 {{total}}
    </span>
    <button class="btn btn-danger" @click="updateAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['todos', 'allCheck','deleteAll'],
  computed: {
    // 计算已经完成的
    isDone () {
      return this.todos.reduce((pre, current) =>
        pre += current.done ? 1 : 0, 0)
    },
    // 计算所有事项
    total () {
      return this.todos.length
    },
		// 通过计算属性来修改全选或者全不选
    allChecked: {
      set (value) {
        this.allCheck(value)
      },
      get () {
        return this.isDone === this.total && this.total > 0
      }
    }
  },
	methods: {
		updateAll(){
			// this.deleteAll()
			// 向App组件发射一个delete-all事件
			this.$emit('delete-all')
		}
	},
}
</script>

<style scoped >
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
