const mockTodos = [
    // {id:1, text: "Write paper"},
    // {id:2, text: "sleep"}
];

export default function todos(state = { todos: mockTodos }, action) {

    if (action.type === 'ADD_TODO') {
        return { todos: state.todos.concat(action.payload) };
    }

    return state;
}