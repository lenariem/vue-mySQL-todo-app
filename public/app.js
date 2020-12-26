new Vue({
    el: '#app',
    data() {
      return {
        isDark: true,
        show: true,
        todoTitle: '',
        todos: []
      }
    },
    methods: {
      addTodo() {
        const title = this.todoTitle.trim()
        if (!title) {
          return
        }
        /* this.todos.push({
          title: title,
          id: Math.random(),
          done: false,
          date: new Date()
        }) */

        fetch('/api/todo', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({title})
        })
          .then(res => res.json())
          .then(({todo}) => {
            console.log(todo)
  
            this.todos.push(todo)
            /* clean field after add todo */
            this.todoTitle = ''
          })
          .catch(e => console.log(e))
      },
      removeTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id)
      }
    },
    filters: {
      capitalize(value) {
        return value.toString().charAt(0).toUpperCase() + value.slice(1)
      },
      date(value) {
        return new Intl.DateTimeFormat('en-EN', {
          year: 'numeric',
          month: 'long',
          day: '2-digit'
        }).format(new Date(value))
      }
    }
  })