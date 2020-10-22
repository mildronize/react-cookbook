import { combineReducers } from 'redux';
import { visibilityFilters } from './actions';
let _id = 0;

export const uniqueId = () => _id++;

const mockTodos = [
    { id: 1, text: "Write paper" },
    { id: 2, text: "sleep" }
];

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state,
                {
                id: uniqueId(),
                text: action.text,
                isCompleted: false,
                isEdited: false
                }
            ]
        case 'TOGGLE_EDIT_TODO':
            return state.map(todo =>
                todo.id === action.id 
                    ? { ...todo, isEdited: !todo.isEdited } 
                    : todo)

        case 'EDIT_TODO':
            return state.map(todo =>
                todo.id === action.id 
                    ? { ...todo, text: action.text } 
                    : todo)

        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id
                    ? { ...todo, isCompleted: !todo.isCompleted } 
                    : todo)

        case 'DELETE_TODO':
            return state.filter(todo => (todo.id !== action.id))

        case 'EXIT_EDIT_TODO':
            return state.map(todo =>
                todo.id === action.id 
                    ? { ...todo, isEdited: false } 
                    : todo)
        default:
            return state;
    }
}

const visibilityFilter = (state = visibilityFilters.SHOW_ALL, action) => {
    switch(action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}

export default combineReducers({
    todos,
    visibilityFilter
})
