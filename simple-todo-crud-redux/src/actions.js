let _id = 3;

export const uniqueId = () => _id++;

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    text
})

export const editTodo = (id, text) => ({
    type: 'EDIT_TODO',
    id,
    text
})

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    id
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})

export const toggleEditTodo = (id) => ({
    type: 'TOGGLE_EDIT_TODO',
    id
})

export const exitEditTodo = (id) => ({
    type: 'EXIT_EDIT_TODO',
    id
})

// filters

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

// type

export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
}