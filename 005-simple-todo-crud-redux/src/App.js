import React, { Component } from 'react';
import './App.css';
import AddTodo from './components-with-containers/AddTodo.container';
import TodoList from './components-with-containers/TodoList.container';
import FilterButton from './components-with-containers/FilterButton.container';
import { visibilityFilters } from './actions';

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
        <FilterButton filter={visibilityFilters.SHOW_ALL}>
          All
        </FilterButton>
        <FilterButton filter={visibilityFilters.SHOW_ACTIVE}>
          Active
        </FilterButton>
        <FilterButton filter={visibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterButton>
      </div>
    );
  }
}

export default App;
