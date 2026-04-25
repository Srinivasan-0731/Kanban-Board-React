import { DndContext, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
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

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;
    const dragged = tasks.find((t) => t.id === active.id);
    if (dragged && dragged.status !== over.id) {
      updateTask({ ...dragged, status: over.id });
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => { setSelectedTask(null); setIsModalOpen(true); }}
          style={{
            background: "#185FA5",
            color: "#E6F1FB",
            border: "none",
            borderRadius: "8px",
            padding: "8px 18px",
            fontSize: "13px",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          + Add New Task
        </button>
      </div>

      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "16px",
        }}>
          {COLUMNS.map((col) => (
            <Column
              key={col.id}
              column={col}
              tasks={tasks.filter((t) => t.status === col.id)}
              onEdit={(task) => { setSelectedTask(task); setIsModalOpen(true); }}
              onDelete={deleteTask}
            />
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
  );
}

export default Board;