import { useState } from "react";

function TaskInput({ addTask }) {
    const [text, setText] = useState("");

    const handleAdd1 = () => {
        if (!text) return;
        addTask(text);
        setText("");
    };

    const handleAdd2 = () => {
        if (!text) return;
        addTask(text);
        setText("");
    };

    return (
        <div>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add task..."
            />
            <button onClick={handleAdd1}>Add</button>
            <button onClick={handleAdd2}>Delete</button>
        </div>
    );
}

export default TaskInput;