import React from 'react';
import store from '../store';

class AddTodo extends React.Component {

    state = {
        input: ""
    }

    handleSubmit(event){
        const root = store.getRoot()
        if(this.state.input === "") return;
        if (!(event.type === "click" || ( event.type === "keydown" && event.keyCode === 13))) return;
        root.handleAddTodo(this.state.input);
        this.setState({ input: "" });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="What you want to do?"
                    value={this.state.input}
                    onChange={(event) => this.setState({ input: event.target.value })}
                    onKeyDown={(event) => this.handleSubmit(event)}
                />
                <button
                    type="button"
                    onClick={(event) => this.handleSubmit(event)}
                >Add</button>
            </div>
        )
    }
}

export default AddTodo;