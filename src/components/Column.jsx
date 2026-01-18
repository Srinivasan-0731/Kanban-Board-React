import TaskCard from "./TaskCard";
import { useDroppable } from "@dnd-kit/core";


function Column({  column, tasks, onEdit, onDelete }) {
    const { setNodeRef } = useDroppable({ id: column.id });
    

    return (
        <div ref={setNodeRef} className="bg-blue-100 p-4 rounded shadow-xl min-h-[400px]">
            <h2 className="text-xl font-bold shadow-md bg-amber-300 rounded-xl shadow-black/30 p-2 mb-3">{column.title}</h2>

            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}

        </div>
    )
}

export default Column;