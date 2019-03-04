import shortid from 'shortid';

export class TodoListModel{
    constructor() {
        this.todos = []
      }

    addTodo(todoObject){
        this.todos =  [...this.todos, todoObject]
    }

    get(){
        return this.todos.map(todo => (todo.get()));
    }

}

export class TodoModel{
    constructor(item = "") {
        this.id = shortid.generate()
        this.item = item
        this.isCompleted = false
      }

    get(){
        return { ...this } ;
    }
}