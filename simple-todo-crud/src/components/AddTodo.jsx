import React from 'react';
import { connect } from 'store';

class AddTodo extends React.Component {

    state = {
        input: ""
    }

    onSubmit(event){
        const root = this.props.root
        if(this.state.input === "") return;
        if (!(event.type === "click" || ( event.type === "keydown" && event.keyCode === 13))) return;
        root.onAddTodo(this.state.input);
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
                    onKeyDown={(event) => this.onSubmit(event)}
                />
                <button
                    type="button"
                    onClick={(event) => this.onSubmit(event)}
                >Add</button>
            </div>
        )
    }
}

export default connect(AddTodo);