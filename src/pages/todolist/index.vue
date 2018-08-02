<template>
  <div class="container" >
    <p class="title">{{title}}</p>
    <input type="text" placeholder="请输入待做事项" v-model="mytodo">
    <button @click="addTodo">添加一条</button>
    <button @click="clearTodo">清空</button>
    <ul class="todos">
      <li @click="toggleHandle(index)" v-for="(todo, index) in todos" :key="index" :class="{'done':todo.done}">{{todo.text}}</li>
      <li class="todo-footer"> {{todoNum}}/{{todos.length}} </li>
    </ul>
  </div>
</template>

<script>
// import mptoast from 'mptoast'

export default {
  data() {
    return {
      mytodo: '',
      title: 'TodoList',
      todos: []
    };
  },
  components: {
    
  },
  computed: {
    todoNum () {
      return this.todos.filter(v => !v.done).length
    }
  },
  methods: {
    //清空掉已完成的事项
    clearTodo() {
      this.todos = this.todos.filter(v => !v.done)
      this.updateStorage()
    },
    //添加一条
    addTodo() {
      if(!this.mytodo){
        return
      }
      this.todos.push({
        text: this.mytodo,
        done: false
      })
      this.mytodo = ''
      this.updateStorage()
    },
    //切换事件的完成情况
    toggleHandle(i) {
      this.todos[i].done = !this.todos[i].done
      this.updateStorage()
    },
    //更新本地存储
    updateStorage () 
    {
       wx.setStorageSync('todos', this.todos) 
    },
  },
  //created生命周期,组件创建后执行
  created() {
    //从本地存储里获取数据
    this.todos = wx.getStorageSync('todos') || []
  }
};
</script>

<style lang="scss" scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
.done {
  text-decoration: line-through;
}
ul.todos {
  margin: 40rpx;
}
input {
  border:2px solid #ed12a3;
}
.todo-footer {
  width: 100%;
  text-align: right;
}
</style>
