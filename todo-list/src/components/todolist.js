import { ListItems } from "./listitem.js"
import "./todolist.css"
export function TodoList({ todos, removeTodo }) {
    return (
        <div className="todo-list">
            {
                todos.map((todo, index) => {
                    return <ListItems text={todo} key={index} removeTodo={() => removeTodo(index)} />
                })
            }
        </div>
    )
}
