const App = {
  data: () => ({
    counter: 0
  })
}

const Todos = {
  data: () => ({
    todos: [],
    todosTitle: 'Todos',
    inputPlaceholder: 'Please enter todo name',
    inputValue: ''
  }),
  methods: {
    addTodo() {
      console.log('add todo')
      if(this.inputValue) {
        this.todos.push({name: this.inputValue})
        this.inputValue = ''
        localStorage.setItem('todos', JSON.stringify(this.todos))
      }
    },
    removeTodo(index){
      this.todos.splice(index, 1)
      if(!todos.length){
        localStorage.removeItem('todos')
      }
    },
    toUpperCase (value) {
      return value.toUpperCase()
    }
  },
  computed: {
    todosCount() {
      return this.todos.length
    }
  },
  mounted() {
    if (localStorage.getItem('todos')){
      this.todos = JSON.parse(localStorage.getItem('todos'))
    }
  },
  watch: {
    inputValue(value) {
      this.inputValue = value.length > 5 ? value.substring(0, 12) : value 
    }
  }
}

Vue.createApp(App).mount('#counter')
Vue.createApp(Todos).mount('#todos')