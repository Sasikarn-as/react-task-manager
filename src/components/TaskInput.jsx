import { useState } from "react";

function TaskInput({ addTask }) {
    const [text, setText] = useState("");

    const handleAdd = () => {
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
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default TaskInput;