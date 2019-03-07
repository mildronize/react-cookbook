import { connect } from 'react-redux';
import Todo from './Todo';
import {
    editTodo,
    toggleEditTodo,
    toggleTodo,
    deleteTodo,
    exitEditTodo
} from '../actions';

const mapDispatchToProps = {
    editTodo,
    toggleEditTodo,
    toggleTodo,
    deleteTodo,
    exitEditTodo
}

export default connect(null, mapDispatchToProps)(Todo);