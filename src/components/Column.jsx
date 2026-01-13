import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import { useDroppable } from "@dnd-kit/core";


const Column = ({ columnId }) => {
    const { columns } = useTasks();


    const { setNodeRef } = useDroppable({ id: columnId });

    return (

        
            <div ref={setNodeRef}>
                <h2 className=" mb-4 bg-blue-500 p-4 rounded-lg w-64 ml-26 font-bold border-2">{columns[columnId].name}</h2>

                {columns[columnId].items.map(task => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        columnId={columnId} />
                ))}


            </div>
        
    );
}

export default Column;