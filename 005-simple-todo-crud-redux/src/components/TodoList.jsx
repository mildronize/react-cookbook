import React from 'react';
import Todo from './Todo';
import { visibilityFilters} from '../actions';

import { connect } from 'react-redux';

const applyVisibilityFilterTodo = (todos, filter) => {
    switch(filter){
        case visibilityFilters.SHOW_ALL:
            return todos;
        case visibilityFilters.SHOW_ACTIVE:
            return todos.filter( todo => !todo.isCompleted)
        case visibilityFilters.SHOW_COMPLETED:
            return todos.filter( todo => todo.isCompleted)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = (state) => ({
    todos: applyVisibilityFilterTodo(state.todos, state.visibilityFilter)
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

