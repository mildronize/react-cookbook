import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addTodo } from './actions';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }
  
  onSubmit(){
    this.props.addTodo(this.state.input)
  }

  render() {
    const { todos } = this.props;
    return (
      <div className="App">
        <input 
          value={this.state.input}
          onChange={(e) => this.setState({ input: e.target.value })}
          />
        <button
          onClick={() => this.onSubmit()}>add</button>
        <ul>
          {
            todos.map((todo) => (
              <li key={todo.id}>{todo.text}</li>
            ))
          }
        </ul>

      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     todos: state.todos
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     onAddTodo: (text) => {
//       dispatch(addTodo(text))
//     }
//   }
// }

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => {
    dispatch(addTodo(text))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
