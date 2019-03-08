import { connect } from 'react-redux';
import TodoList from './TodoList';
import { visibilityFilters } from '../actions';

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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);