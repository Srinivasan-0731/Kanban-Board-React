import { useDraggable } from "@dnd-kit/core";
import { useTasks } from "../context/TaskContext";
import { CSS } from "@dnd-kit/utilities"
import { useState } from "react";



const TaskCard = ({ task, columnId }) => {
    const { removeTask, editTask } = useTasks();



    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: `${columnId}-${task.id}`,
        data: {
            taskId: task.id,
            columnId
        },
    });

    const style = {
        transform: CSS.Translate.toString(transform),
    };


    return (
        <div ref={setNodeRef}
            {...attributes}
            {...listeners}
            className="bg-zinc-600 p-3 mb-3 text-white rounded cursor-move ml-20 flex justify-between"
            style={style}
        >

            <>
                <span>{task.content}</span>

                <div className="flex gap-2 ml-3">
                    {/* DELETE */}
                    <button onClick={(e) => {
                        e.stopPropagation(); e.preventDefault();
                        removeTask(columnId, task.id);
                    }}
                        className="hover:bg-red-600 cursor-pointer" title="Delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="currentColor" viewBox="0 0 24 24" >
                            --Boxicons v3.0.7 https://boxicons.com | License  https://docs.boxicons.com/free--
                            <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z" />
                        </svg>
                    </button>
                </div>
            </>


        </div>
    );
}

export default TaskCard;