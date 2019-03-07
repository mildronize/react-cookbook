import React from 'react';
import Todo from './Todo';

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = null;

const TodoList = ({ todos }) => (
    <ul>
        {
            todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))
        }
    </ul>
)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);