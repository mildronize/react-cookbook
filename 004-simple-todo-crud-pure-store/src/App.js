import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import store from './store';

class App extends React.Component {
  
  render() {

    return (
      <div className="App">
        <h1>Todo App with pure-store</h1>
        <AddTodo />
        <TodoList todos={store.state.todos} />
      </div>
    );
  }
}

export default App;
