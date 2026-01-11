import { createContext, useContext, useEffect, useState } from "react";
import { initialData } from "../data/initialData";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [columns, setColumns] = useState(() => {
        const saved =localStorage.getItem("kanban");
        return saved ? JSON.parse(saved) : initialData;
    });

    
    useEffect (() => {
        localStorage.setItem("kanban", JSON.stringify(columns));
    }, [columns]);

    const addTask = (columnId, task) => {
        setColumns(prev => ({
            ...prev,
            [columnId]: {
                ...prev[columnId],
                items: [...prev[columnId].items, task],
            },
        }));
    };

    const removeTask = (columnId, taskId) => {
        setColumns(prev => ({
            ...prev,
            [columnId]: {
                ...prev[columnId],
                items: prev[columnId].items.filter((task) => task.id !== taskId),
            },
        }));
    };

    const editTask = (columnId, taskId, newText) => {
        setColumns(prev => ({
            ...prev,
            [columnId]: {
                ...prev[columnId],
                items: prev[columnId].items.map(task => task.id === taskId
                    ? {...task, text: newText } : task
                ),
            },
        }));
    };

    

    return (
        <TaskContext.Provider value={{ columns, setColumns, addTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    );
};



 export const useTasks = () => useContext(TaskContext);