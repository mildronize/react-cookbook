import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  render() {
    const { todos } = this.props;
    return (
      <div className="App">
        <h1>Todo App</h1>
        <AddTodo />
        <TodoList />

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(mapStateToProps)(App);
