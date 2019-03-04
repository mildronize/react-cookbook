import shortid from 'shortid';

export class TodoListModel{
    constructor(item = "") {
        this.todos = []
      }

    addTodo(todoObject){
        this.todos =  [...this.todos, todoObject]
    }

    get(){
        return this.todos;
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