import "./listitem.css"
export function ListItems({ text, removeTodo }) {
    return (
        <div className="list-items">
            <p>{text}</p>
            <button className="checkbox" onClick={removeTodo}></button>
        </div>
    )
}