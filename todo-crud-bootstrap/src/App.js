import React from 'react';
import shortid from 'shortid';
import './App.css';

const ENTER = 13;

class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    const todoListData = [
      { id: shortid.generate(), isCompleted: false, item: "Buy a pen", isEdited: false }
    ];
    const initialTodoItem = { id: "", isCompleted: false, item: "", isEdited: false };
    this.state = {
      todoListData,
      todoList: [],
      inputTodo: "",
      currentTodoItem: initialTodoItem,
      filter: "SHOW_ALL",
      isFilter: {
        SHOW_ALL: false,
        SHOW_ACTIVE: true,
        SHOW_COMPLETED: true,
      },
    };
  }

  // CRUD
  addTodoList(todoItem) {
    this.setState(state => ({
      todoListData: [...state.todoListData, todoItem],
      inputTodo: ""
    }));
    this.filterTodoList();
  }

  updateTodoList(todoItem) {
    this.setState(state => ({
      todoListData: state.todoListData.map(todo => (todo.id === todoItem.id ? todoItem : todo))
    }));
    this.filterTodoList();
  }

  deleteTodoList(todoItem) {
    this.setState(state => ({
      todoListData: state.todoListData.filter(todo => (todo.id !== todoItem.id))
    }));
    this.filterTodoList();
  }

  // Event Handler

  handleAddTodoList() {
    if (this.state.inputTodo === "") return;
    const todoItem = {
      id: shortid.generate(),
      isCompleted: false,
      isEdited: false,
      item: this.state.inputTodo
    }
    this.addTodoList(todoItem);
    this.setState({ inputTodo: "" });
  }


  handleToggleTodoItem(todoItem) {
    todoItem.isCompleted = !todoItem.isCompleted;
    this.updateTodoList(todoItem);
  }

  handleEditTodoItem(todoItem) {
    todoItem.isEdited = !todoItem.isEdited;
    this.updateTodoList(todoItem);
  }

  handleEditTodoInput(event, todoItem) {
    todoItem.item = event.target.value;
    this.updateTodoList(todoItem);
  }

  handleEditTodoSubmit(event, todoItem) {
    if (event.keyCode != ENTER && event.type !== "blur") return;
    todoItem.isEdited = false;
    this.updateTodoList(todoItem);
  }

  async handleFilter(event){
    const type = event.target.name;
    console.log("clicked " + type)
    
    await this.setState({
      filter: type,
      isFilter : {
        SHOW_ALL: type === "SHOW_ALL"?false:true,
        SHOW_ACTIVE: type === "SHOW_ACTIVE"?false:true,
        SHOW_COMPLETED: type === "SHOW_COMPLETED"?false:true,
      }
    });
    this.filterTodoList();
  }
  
  filterTodoList(){
    if (this.state.filter === "SHOW_ALL"){
      this.setState(state => ({
        todoList: state.todoListData
      }));
    }else if (this.state.filter === "SHOW_ACTIVE"){
      this.setState(state => ({
        todoList: state.todoListData.filter(todo => (todo.isCompleted === false))
      }));
    }else if (this.state.filter === "SHOW_COMPLETED"){
      this.setState(state => ({
        todoList: state.todoListData.filter(todo => (todo.isCompleted === true))
      }));
    }
  }

  componentDidMount(){
    this.filterTodoList();
  }

  render() {
    return (
      <div className="container">
        <h1>Todo App</h1>
        <div className="d-flex justify-content-start">
          <input
            className="form-control"
            type="text"
            placeholder="What you want to do?"
            value={this.state.inputTodo}
            onChange={(event) => this.setState({ inputTodo: event.target.value })}
            onKeyDown={(event) => event.keyCode === ENTER ? this.handleAddTodoList() : null} />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.handleAddTodoList()}
          >Add</button>
        </div>

        <div className="card">
          <ul className="list-group list-group-flush">
            {this.state.todoList.map(todoItem => (

              <li key={todoItem.id} className="list-group-item">
                <div className="d-flex justify-content-between  align-items-center">
                  <div className="d-flex align-items-center flex-fill">
                    <div >
                      <label htmlFor={todoItem.id}>
                        <input
                          type="checkbox"
                          id={todoItem.id}
                          checked={todoItem.isCompleted}
                          onChange={() => this.handleToggleTodoItem(todoItem)} />
                      </label>
                    </div>
                    <div className="flex-fill" >
                      {todoItem.isEdited ? (
                        <input
                          autoFocus
                          class="todo-edit"
                          type="text"
                          value={todoItem.item}
                          onChange={(event) => this.handleEditTodoInput(event, todoItem)}
                          onKeyDown={(event) => this.handleEditTodoSubmit(event, todoItem)}
                          onBlur={(event) => this.handleEditTodoSubmit(event, todoItem)}
                        />
                      ) : (
                          <span
                            className={todoItem.isCompleted ? "todo-item todo-checked" : "todo-item"}
                            onClick={() => this.handleEditTodoItem(todoItem)}>{todoItem.item}</span>
                        )
                      }
                    </div>
                  </div>
                  {!todoItem.isEdited && <div >
                    <button
                      type="button"
                      class="btn btn-light todo-delete"
                      onClick={() => this.handleEditTodoItem(todoItem)}>edit</button>
                    <button
                      type="button"
                      class="btn btn-danger todo-delete"
                      onClick={() => this.deleteTodoList(todoItem)}>X</button>
                  </div>}
                </div>
              </li>)
            )}
          </ul>
        </div>

        <div className="">
          <div className="d-flex justify-content-center">
            <button
              name="SHOW_ALL"
              type="button"
              class="btn btn-light"
              disabled={!this.state.isFilter['SHOW_ALL']}
              onClick={(event) => this.handleFilter(event)}
            >All</button>
            <button
              name="SHOW_ACTIVE"
              type="button"
              class="btn btn-light"
              disabled={!this.state.isFilter['SHOW_ACTIVE']}
              onClick={(event) => this.handleFilter(event)}
            >Active</button>
            <button
              name="SHOW_COMPLETED"
              type="button"
              class="btn btn-light"
              disabled={!this.state.isFilter['SHOW_COMPLETED']}
              onClick={(event) => this.handleFilter(event)}
            >Completed</button>
          </div>
        </div>
      </div>
    )
  }
}


export default TodoApp;
