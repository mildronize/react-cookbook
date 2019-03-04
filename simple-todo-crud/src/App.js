import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/Todos/TodoList';
import store from './store';
import shortid from 'shortid';
// import { TodoListModel, TodoModel } from './models';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        store.setRoot(this);
        const todoListData = [
            { id: shortid.generate(), isCompleted: false, item: "Buy a pen", isEdited: false }
        ];

        this.state = {
            todoListData,
            todos: []
        };
    }

    // CRUD
    addTodoList(todoItem) {
        this.setState(state => ({
            todoListData: [...state.todoListData, todoItem]
        }));
        this.updateView();
    }

    updateTodoList(todoItem) {
        this.setState(state => ({
            todoListData: state.todoListData.map(todo => (todo.id === todoItem.id ? todoItem : todo))
        }));
        this.updateView();
    }

    deleteTodoList(todoItem) {
        this.setState(state => ({
            todoListData: state.todoListData.filter(todo => (todo.id !== todoItem.id))
        }));
        this.updateView();
    }

    // event

    handleAddTodo(input) {
        this.addTodoList({
            id: shortid.generate(), isCompleted: false, item: input, isEdited: false
        })
        this.updateView();
    }

    handleToggleTodo(todo) {
        todo.isCompleted = !todo.isCompleted;
        this.updateTodoList(todo);
    }

    handleToggleEditMode(todo) {
        todo.isEdited = !todo.isEdited;
        this.updateTodoList(todo);
    }

    handleEditTodoInput(event, todoItem) {
        todoItem.item = event.target.value;
        this.updateTodoList(todoItem);
    }

    handleEditTodoSubmit(event, todoItem) {
        if (event.keyCode != 13 && event.type !== "blur") return;
        todoItem.isEdited = false;
        this.updateTodoList(todoItem);
    }

    //  render

    componentDidMount() {
        this.updateView();
    }

    updateView() {
        this.setState(state => ({
            todos: state.todoListData
        }));
    }


    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <AddTodo />
                <TodoList todos={this.state.todos} />
            </div>
        )
    }
}

export default App;