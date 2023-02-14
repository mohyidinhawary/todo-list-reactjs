import "./style.css"
import { Form } from "./components/form"
import { useState } from "react"
import { TodoList } from "./components/todolist"
function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])

  }
  const removeTodo = (todoIndex) => {
    const todosCopy = [...todos]
    todosCopy.splice(todoIndex, 1)
    setTodos(todosCopy)
  }
  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
