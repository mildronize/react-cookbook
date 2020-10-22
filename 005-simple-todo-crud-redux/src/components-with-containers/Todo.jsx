import React from 'react'

class Todo extends React.Component {

    render() {
        const { todo } = this.props;
        return (
            <li className={todo.isCompleted && `todo-checked`} >
                < input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => this.props.toggleTodo(todo.id)} />
                {todo.isEdited ? (
                    <input
                        autoFocus
                        type="text"
                        value={todo.text}
                        onChange={(e) => this.props.editTodo(todo.id, e.target.value)}
                        onKeyDown={(e) => e.keyCode === 13 ? this.props.exitEditTodo(todo.id) : null}
                        onBlur={() => this.props.exitEditTodo(todo.id)}
                    />
                ) : (
                        <span onClick={() => this.props.toggleEditTodo(todo.id)}>{todo.text}</span>
                    )
                }
                <button onClick={() => this.props.toggleEditTodo(todo.id)}>edit</button>
                <button onClick={() => this.props.deleteTodo(todo.id)}>delete</button>
            </li>
        )
    }

}

export default Todo  