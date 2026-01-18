import { useDraggable } from "@dnd-kit/core";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";



const priorityColors = {
    low:"bg-green-500",
    medium:"bg-yellow-500",
    high:"bg-red-500",
};

function TaskCard({ task, onEdit, onDelete }) {
    
    const { atttributes, listeners, setNodeRef } = useDraggable({ id: task.id });

    return (
        <>
            <div ref={setNodeRef}
                {...listeners}
                {...atttributes}
                 className={`bg-white p-2 mb-3 rounded shadow border-l-4 ${priorityColors[task.priority]} flex justify-between cursor-grab`}>

                <div>
                    <h3 className="font-semibold">{task.title}</h3>
                    <p className="text-md text-gray-600">
                        {task.description || "No description"}
                    </p>
                    <span className="text-md text-blue-600">{task.priority}</span>
                </div>

                <div className="flex items-center gap-4">
                    <button onClick={() => onEdit(task)}>
                        <FaRegEdit className="w-6 h-6 border-none cursor-pointer text-amber-200" />
                    </button>
                    <button onClick={() => onDelete(task.id)}>
                        <RiDeleteBinLine  className="w-6 h-6 border-none  cursor-pointer text-red-500"/>
                    </button>
                </div>
            </div>

        </>
    );
}
export default TaskCard;