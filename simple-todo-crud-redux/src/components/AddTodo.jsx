import React from 'react';

import { connect } from 'react-redux';
import { addTodo } from '../actions';

const mapStateToProps = null;
const mapDispatchToProps = {
    addTodo
}

class AddTodo extends React.Component {
    state = { input: ""}

    onSubmit(event) {
        if (this.state.input === "") return;
        if (!(event.type === "click" || (event.type === "keydown" && event.keyCode === 13))) return;
        this.props.addTodo(this.state.input);
        this.setState({ input: "" });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="What you want to do?"
                    value={this.state.input}
                    onChange={(e) => this.setState({ input: e.target.value })}
                    onKeyDown={(e) => this.onSubmit(e)}
                />
                <button
                    type="button"
                    onClick={(e) => this.onSubmit(e)}
                >Add</button>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);