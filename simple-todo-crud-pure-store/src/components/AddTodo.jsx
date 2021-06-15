import React from 'react';
import store, {uniqueId} from '../store';

const addTodo = (text) => store.update(state => {
    state.todos.push({id: uniqueId(), text, isCompleted: false, isEdited: false})
})

class AddTodo extends React.Component {

    state = { todoInput: "" }

    onSubmit = (e, text) =>  {
        e.preventDefault()
        if(text === "")return;
        addTodo(text);
        this.setState({todoInput: ""})
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.onSubmit(e, this.state.todoInput)}>
                    <input
                        value={this.state.todoInput}
                        onChange={e => this.setState({ todoInput: e.target.value })}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default AddTodo