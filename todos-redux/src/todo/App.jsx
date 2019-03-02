import React from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'
import TodoListContainer from './TodoListContainer'

const App = () => (
  <div>
    <AddTodo />
    <TodoListContainer />
    <Footer />
  </div>
)

export default App
