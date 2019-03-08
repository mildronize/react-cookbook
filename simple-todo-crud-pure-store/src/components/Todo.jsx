import React from 'react';
import store from '../store';

const exitEditTodo = (id) => store.update(state => {
    state.todos = state.todos.map(todo =>
        todo.id === id ? { ...todo, isEdited: false } : todo
    )
})

const toggleEditTodo = (id) => store.update(state => {
    state.todos = state.todos.map(todo =>
        todo.id === id ? { ...todo, isEdited: !todo.isEdited } : todo
    )
})

const toggleTodo = (id) => store.update(state => {
    state.todos = state.todos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    )
})

const editTodo = (id, text) => store.update(state => {
    state.todos = state.todos.map(todo =>
        todo.id === id ? { ...todo, text } : todo
    )
})

const deleteTodo = (id) => store.update(state => {
    state.todos = state.todos.filter(todo => todo.id !== id)
})

class Todo extends React.Component {

    render() {
        const { todo } = this.props;
        return (
            <li>
                <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => toggleTodo(todo.id)} />
                {todo.isEdited ? (
                    <input
                        autoFocus
                        type="text"
                        value={todo.text}
                        onChange={(e) => editTodo(todo.id, e.target.value)}
                        onBlur={() => exitEditTodo(todo.id)}
                        onKeyDown={(e) => e.keyCode === 13 ? exitEditTodo(todo.id) : null}
                    />
                ) : (
                        <span onClick={() => toggleEditTodo(todo.id)}>{todo.text}</span>
                    )}
                <button onClick={() => toggleEditTodo(todo.id)}>edit</button>
                <button onClick={() => deleteTodo(todo.id)}>delete</button>
            </li>
        )
    }
}

export default Todo