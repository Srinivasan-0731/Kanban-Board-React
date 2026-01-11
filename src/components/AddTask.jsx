import { useState } from "react";
import { useTasks } from "../context/TaskContext";

const AddTask = () => {
    const { columns, addTask } = useTasks();
    const [text, setText] = useState("");
    const [columnId, setColumnId] = useState("todo");

    const handleAdd = () => {
        if (!text.trim()) return;
        addTask(columnId, {
            id: Date.now().toString(),
            content: text,
        });

        setText("");
    };

    return (
        <>
        <h1 className="text-center font-extrabold text-6xl pt-10">Kanban Board</h1>
        <div className="flex justify-center items-center gap-2 mb-6 pt-20">
            <input  value={text}
            onChange={e => setText(e.target.value)}
            placeholder="New task" className="border p-2 rounded-md"
            />

            <select onChange={e => setColumnId(e.target.value)} className="border p-2 rounded-md">
                {Object.keys(columns).map(column => (
                    <option key={column} value={column}>
                        {columns[column].name}
                    </option>
                ))}
            </select>
            <button className="border px-6 py-2 rounded-md bg-blue-500 hover:bg-blue-600 cursor-pointer" onClick={handleAdd}>Add</button>
        </div>
        </>
    );
}

export default AddTask;