import { useDraggable } from "@dnd-kit/core";

const borderColors = {
  high: "#E24B4A",
  medium: "#EF9F27",
  low: "#639922",
};

const badgeStyles = {
  high: { background: "#FCEBEB", color: "#A32D2D" },
  medium: { background: "#FAEEDA", color: "#854F0B" },
  low: { background: "#EAF3DE", color: "#3B6D11" },
};

function TaskCard({ task, onEdit, onDelete }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: task.id });

  const isOverdue =
    task.deadline &&
    new Date(task.deadline) < new Date() &&
    task.status !== "done";

  const formattedDate = task.deadline
    ? new Date(task.deadline).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        background: "#ffffff",
        borderRadius: "8px",
        border: "0.5px solid #D3D1C7",
        borderLeft: `3px solid ${borderColors[task.priority] || "#888780"}`,
        padding: "10px 12px",
        marginBottom: "9px",
        cursor: "grab",
        opacity: isDragging ? 0.4 : 1,
        transition: "opacity 0.15s",
      }}
    >
      {/* Top row: title + actions */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "5px" }}>
        <span style={{ fontSize: "13px", fontWeight: "500", color: "#2C2C2A", paddingRight: "8px", lineHeight: "1.4" }}>
          {task.title}
        </span>
        <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onEdit(task); }}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: "16px", padding: 0 }}
            title="Edit"
          >
            ✏️
          </button>
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onDelete(task.id); }}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px", padding: 0 }}
            title="Delete"
          >
            🗑
          </button>
        </div>
      </div>

      
      {task.description && (
        <p style={{ fontSize: "11px", color: "#5F5E5A", marginBottom: "7px", lineHeight: "1.5" }}>
          {task.description}
        </p>
      )}


      {task.tags && task.tags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "7px" }}>
          {task.tags.map((tag, i) => (
            <span key={i} style={{
              fontSize: "10px",
              background: "#E6F1FB",
              color: "#185FA5",
              padding: "2px 7px",
              borderRadius: "20px",
              fontWeight: "500",
            }}>
              #{tag}
            </span>
          ))}
        </div>
      )}

      
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "6px",
        borderTop: "0.5px solid #D3D1C7",
      }}>
        <span style={{
          fontSize: "10px",
          fontWeight: "500",
          padding: "2px 7px",
          borderRadius: "20px",
          textTransform: "capitalize",
          ...(badgeStyles[task.priority] || { background: "#F1EFE8", color: "#5F5E5A" }),
        }}>
          {task.priority || "none"}
        </span>

        {formattedDate && (
          <span style={{
            fontSize: "10px",
            color: isOverdue ? "#A32D2D" : "#888780",
            fontWeight: isOverdue ? "500" : "400",
          }}>
            📅 {formattedDate}
          </span>
        )}
      </div>
    </div>
  );
}

export default TaskCard;