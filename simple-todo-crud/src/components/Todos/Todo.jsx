import React from 'react';
import { connect } from 'store';

class Todo extends React.Component {

    render() {
        const { todo, root } = this.props;
        return (
            <li
                className={todo.isCompleted && `todo-checked`}
            >
                < input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => root.onToggleTodo(todo)} />
                {todo.isEdited ? (
                    <input
                        autoFocus
                        type="text"
                        value={todo.item}
                        onChange={(e) => root.onEditTodoInput(e, todo)}
                        onKeyDown={(e) => root.onEditTodoSubmit(e, todo)}
                        onBlur={(e) => root.onEditTodoSubmit(e, todo)}
                    />
                ) : (
                        <span onClick={() => root.onToggleEditMode(todo)}>{todo.item}</span>
                    )
                }
                <button onClick={() => root.onToggleEditMode(todo)}>edit</button>
                <button onClick={() => root.deleteTodoList(todo)}>delete</button>
            </li>
        )
    }
}

export default connect(Todo);



