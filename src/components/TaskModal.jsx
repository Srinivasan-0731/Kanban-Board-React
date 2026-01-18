import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";


function TaskModal({ task, addTask, updateTask, close }) {
    const isEdit = Boolean(task);
    

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setPriority(task.priority);
        }
    }, [task]);

    const handleSubmit = () => {
        if (!title.trim()) return;

        const data = {
            id: task?.id || uuid(),
            title,
            description,
            priority,
            status: task?.status || "todo",
        };

        if (isEdit) {
            updateTask(data);
        }else {
            addTask(data);
        }
        close();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-5 rounded w-96">
                <h2 className="font-bold text-lg mb-3">{isEdit ? "Edit Task" : "Add Task"}</h2>

                <input  className="border w-full p-2 mb-2"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>

                <textarea className="border w-full p-2 mb-3"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <select className="border w-full p-2 mb-2"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}>

                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>

                <select className="border w-full p-2 mb-3"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}>

                    <option value="todo">To Do</option>
                    <option value="inprogress">In Progress</option>
                    <option value="done">Done</option>
                </select>

                <div className="flex justify-end gap-2">
                    <button onClick={close}>Cancel</button>
                    <button onClick={handleSubmit} className="bg-blue-600 text-white px-3 py-1 rounded">
                        {isEdit ? "update" : "Add"}
                    </button>
                </div>
            </div>
        </div>
    );
}
export default TaskModal;