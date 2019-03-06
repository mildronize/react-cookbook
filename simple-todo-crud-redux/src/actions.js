let _id = 1;
export function uniqueId() {
    return _id++;
}

export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        payload: {
            id: uniqueId(),
            text
        },
    };
}