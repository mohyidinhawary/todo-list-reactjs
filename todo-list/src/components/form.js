import "./form.css"
import { useState } from "react"
export function Form({ addTodo }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text)
        setText("");
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" className="textfiled" value={text} onChange={(e) => setText(e.target.value)} />
            <input type="submit" className="submit-btn" value="Add" />
        </form>
    )
}