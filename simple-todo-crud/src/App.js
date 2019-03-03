import React from 'react';
import AddTodo from './components/AddTodo';
import store from './store';
import { TodoListModel, TodoModel } from './models';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        store.setRoot(this);
        const todoListData = new TodoListModel();
        todoListData.addTodo(new TodoModel("Buy a shirt"))

        this.state = {
            todoListData,
            todos: [],
            currentTodoItem: new TodoModel()
        };
    }

    handleAddTodo(input) {
        this.state.todoListData.addTodo(new TodoModel(input))
        this.updateView();
    }

    componentDidMount() {
        this.updateView();
    }

    updateView() {
        this.setState(state => ({
            todos: state.todoListData.get()
        }));
    }

    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <AddTodo />
                <ul>
                    {this.state.todos.map(todo => (
                        <li key={todo.get().id}>
                            {todo.get().item}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default App;