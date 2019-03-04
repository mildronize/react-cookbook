import React from 'react';
import store from '../../store';

class Todo extends React.Component {

    render() {
        const root = store.getRoot();
        const { todo } = this.props;
        return (
            <li
                className={todo.isCompleted && `todo-checked`}
            >
                < input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => root.handleToggleTodo(todo)} />
                {todo.isEdited ? (
                    <input
                        autoFocus
                        type="text"
                        value={todo.item}
                        onChange={(e) => root.handleEditTodoInput(e, todo)}
                        onKeyDown={(e) => root.handleEditTodoSubmit(e, todo)}
                        onBlur={(e) => root.handleEditTodoSubmit(e, todo)}
                    />
                ) : (
                        <span onClick={() => root.handleToggleEditMode(todo)}>{todo.item}</span>
                    )
                }
                <button onClick={() => root.handleToggleEditMode(todo)}>edit</button>
                <button onClick={() => root.deleteTodoList(todo)}>delete</button>
            </li>
        )
    }
}

export default Todo;



