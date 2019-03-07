import { connect } from 'react-redux';
import TodoList from './TodoList';

const mapStateToProps = (state) => ({
    todos: state.todos
})

export default connect(mapStateToProps, null)(TodoList);