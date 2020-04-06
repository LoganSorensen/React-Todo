import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todo
    }
  }

  toggleTodo = id => {
    const newTodoList = this.state.todoList.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });
    this.setState({
      todoList: newTodoList
    });
  };

  addTodo = todoTask => {
    const newTodo = {
      task: todoTask,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  removeTodo = () => {
    // e.preventDefault();
    const filteredTodo = this.state.todoList.filter(todo => !todo.completed);
    this.setState({
      todoList: filteredTodo
    })
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='todo-card'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
        todo={this.state.todoList}
        toggleTodo={this.toggleTodo}
        removeTodo={this.removeTodo}
        />
      </div>
    );
  }
}

export default App;
