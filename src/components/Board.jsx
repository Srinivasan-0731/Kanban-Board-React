import { DndContext } from "@dnd-kit/core";
import { useTasks } from "../context/TaskContext";
import Column from "./Column";
import TaskModal from "./TaskModal";
import { useState } from "react";

const COLUMNS = [
    { id: "todo", title: "To Do" },
    { id: "inprogress", title: "In Progress" },
    { id: "done", title: "Done" },
];

function Board() {
    const { tasks, addTask, updateTask, deleteTask } = useTasks();
    const [selectedTask, setSelectedTask] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (!over) return;

        ((prev) =>
            prev.map((task) =>
                task.id === active.id
                    ? { ...task, status: over.id }
                    : task)
        );


        const draggedtask = tasks.find((task) => task.id === active.id);

        if (draggedtask && draggedtask.status !== over.id) {
            updateTask({ ...draggedtask, status: over.id });
        }
    };

    return (
        <div className="p-4">
            <button onClick={() => { setSelectedTask(null); setIsModalOpen(true); }} className="bg-blue-600 text-white px-2 py-2 rounded mb-4 ml-6">
                Add New Task
            </button>

            <DndContext onDragEnd={handleDragEnd}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center shadow-xl">
                    {COLUMNS.map((column) => (
                        <Column
                            key={column.id}
                            column={column}
                            tasks={tasks.filter((task) => task.status === column.id)}
                            onEdit={(task) => {
                                setSelectedTask(task);
                                setIsModalOpen(true);
                            }}
                            onDelete={deleteTask} />
                    ))}
                </div>
            </DndContext>

            {isModalOpen && (
                <TaskModal
                    task={selectedTask}
                    addTask={addTask}
                    updateTask={updateTask}
                    close={() => setIsModalOpen(false)}
                />
            )}
        </div>


    )
}

export default Board;