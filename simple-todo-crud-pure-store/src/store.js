import createStore from "pure-store";

const store = createStore({
    todos: []
});

let _id = 1;
export const uniqueId = () => _id++;
export default store