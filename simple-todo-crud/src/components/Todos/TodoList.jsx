import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

    render() {
        const { todos } = this.props;
        return (
            <ul>
                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>
        )
    }
}

export default TodoList;