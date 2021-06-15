import React from 'react';

class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    }

    handleInput(event){
        this.setState({ input: event.target.value })
    }

    handleSubmit(event){
        if(this.state.input === "") return;
        if (!(event.type === "click" || ( event.type === "keydown" && event.keyCode === 13))) return;
        this.props.handleAddTodoList(this.state.input);
        this.setState({ input: "" });
    }

    render() {
        return (
            <div className="d-flex justify-content-start">
                <input
                    className="form-control"
                    type="text"
                    placeholder="What you want to do?"
                    value={this.state.input}
                    onChange={(event) => this.handleInput(event)}
                    onKeyDown={(event) => this.handleSubmit(event)}
                />
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={(event) => this.handleSubmit(event)}
                >Add</button>
            </div>
        )
    }
}

export default AddTodo;