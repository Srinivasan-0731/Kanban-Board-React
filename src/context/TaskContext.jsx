import { createContext, useContext, useEffect, useState } from "react";


const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks((prev) => [...prev, task]);
    };

    const updateTask = (updateTask) => {
        setTasks((prev) =>
            prev.map((task) => task.id === updateTask.id ? updateTask : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    

    return (
        <TaskContext.Provider
            value={{ tasks, addTask, updateTask, deleteTask }}>

            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => useContext(TaskContext);