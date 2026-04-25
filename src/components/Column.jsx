import TaskCard from "./TaskCard";
import { useDroppable } from "@dnd-kit/core";

const colStyles = {
  todo: {
    headBg: "#E6F1FB",
    headColor: "#0C447C",
    countBg: "#B5D4F4",
    countColor: "#0C447C",
  },
  inprogress: {
    headBg: "#FAEEDA",
    headColor: "#633806",
    countBg: "#FAC775",
    countColor: "#633806",
  },
  done: {
    headBg: "#EAF3DE",
    headColor: "#27500A",
    countBg: "#C0DD97",
    countColor: "#27500A",
  },
};

function Column({ column, tasks, onEdit, onDelete }) {
  const { setNodeRef, isOver } = useDroppable({ id: column.id });
  const s = colStyles[column.id] || colStyles.todo;

  return (
    <div
      ref={setNodeRef}
      style={{
        background: "#F1EFE8",
        borderRadius: "12px",
        padding: "14px",
        border: isOver ? "1.5px solid #378ADD" : "0.5px solid #D3D1C7",
        minHeight: "360px",
        transition: "border 0.15s",
      }}
    >
      
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: s.headBg,
        borderRadius: "8px",
        padding: "7px 12px",
        marginBottom: "12px",
      }}>
        <span style={{ fontSize: "13px", fontWeight: "500", color: s.headColor }}>
          {column.title}
        </span>
        <span style={{
          background: s.countBg,
          color: s.countColor,
          fontSize: "11px",
          fontWeight: "500",
          borderRadius: "20px",
          padding: "2px 8px",
        }}>
          {tasks.length}
        </span>
      </div>

      
      {tasks.length === 0 && (
        <p style={{ fontSize: "11px", color: "#888780", textAlign: "center", paddingTop: "32px" }}>
          Drop tasks here
        </p>
      )}

    
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default Column;