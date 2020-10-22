import React from 'react';
import Todo from './Todo';

export default ({ todos }) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
        ))}
    </ul>
)