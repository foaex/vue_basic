<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header :addTodo="addTodo"/>
        <List :todos="todos" :changeChecked='changeChecked' :deleteTodo='deleteTodo'/>
        <Footer :todos="todos" :allCheck='allCheck' :deleteAll='deleteAll'/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    List,
    Footer
  },
  data () {
    return {
      todos: [
        {
          id: '001',
          name: '吃饭',
          done: true
        },
        {
          id: '002',
          name: '睡觉',
          done: false
        },
        {
          id: '003',
          name: '学习',
          done: true
        },
        {
          id: '004',
          name: '看电影',
          done: false
        }
      ]
    }
  },
  methods: {
    // 传给Header组件一个添加事项的函数
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    // 修改事件是否完成
    changeChecked(id,done){
      this.todos = this.todos.map(item=>{
        if(item.id===id){
          return {...item,done}
        }else{
          return item
        }
      })
    },
    // 删除事件函数
    deleteTodo(id){
      // 通过遍历寻找要删除的id 如果不是要删除的 就返回到新数组中
      this.todos = this.todos.filter(item=>{
        return item.id !== id
      })
    },
    // 全选或者全不选
    allCheck(done){
      this.todos = this.todos.map(item=>{
        return {...item,done}
      })
    },
    // 清除所有已经做完的
    deleteAll(){
      // 将所有done值为真的都过滤掉 剩下done值为false的
      this.todos = this.todos.filter(item=>{
        return !item.done
      })
    }
  },
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
