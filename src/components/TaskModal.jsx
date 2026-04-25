import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const inputStyle = {
  width: "100%",
  border: "0.5px solid #B4B2A9",
  borderRadius: "8px",
  padding: "8px 10px",
  fontSize: "13px",
  color: "#2C2C2A",
  background: "#ffffff",
  outline: "none",
  marginBottom: "12px",
  fontFamily: "inherit",
  boxSizing: "border-box",
};

const labelStyle = {
  display: "block",
  fontSize: "10px",
  fontWeight: "500",
  color: "#5F5E5A",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  marginBottom: "4px",
};

function TaskModal({ task, addTask, updateTask, close }) {
  const isEdit = Boolean(task);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [status, setStatus] = useState("todo");
  const [deadline, setDeadline] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (task) {
      setTitle(task.title || "");
      setDescription(task.description || "");
      setPriority(task.priority || "low");
      setStatus(task.status || "todo");
      setDeadline(task.deadline || "");
      setTags(task.tags || []);
    }
  }, [task]);

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const trimmed = tagInput.trim().replace(/^#/, "");
      if (trimmed && !tags.includes(trimmed)) {
        setTags((prev) => [...prev, trimmed]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tag) => setTags((prev) => prev.filter((t) => t !== tag));

  const handleSubmit = () => {
    if (!title.trim()) return;
    const data = {
      id: task?.id || uuid(),
      title: title.trim(),
      description: description.trim(),
      priority,
      status,
      deadline,
      tags,
    };
    isEdit ? updateTask(data) : addTask(data);
    close();
  };

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.45)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 50,
    }}>
      <div style={{
        background: "#ffffff",
        borderRadius: "12px",
        border: "0.5px solid #D3D1C7",
        padding: "22px",
        width: "100%",
        maxWidth: "400px",
        maxHeight: "90vh",
        overflowY: "auto",
        boxSizing: "border-box",
      }}>
        
        <p style={{ fontSize: "16px", fontWeight: "500", color: "#2C2C2A", marginBottom: "16px" }}>
          {isEdit ? "Edit Task" : "Add New Task"}
        </p>

        
        <label style={labelStyle}>Title *</label>
        <input
          style={inputStyle}
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />


        <label style={labelStyle}>Description</label>
        <textarea
          style={{ ...inputStyle, minHeight: "64px", resize: "vertical" }}
          placeholder="Optional description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <div>
            <label style={labelStyle}>Priority</label>
            <select
              style={{ ...inputStyle }}
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Status</label>
            <select
              style={{ ...inputStyle }}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
        </div>

        
        <label style={labelStyle}>Deadline</label>
        <input
          type="date"
          style={inputStyle}
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />


        <label style={labelStyle}>Tags</label>
        <div style={{
          border: "0.5px solid #B4B2A9",
          borderRadius: "8px",
          padding: "6px 10px",
          display: "flex",
          flexWrap: "wrap",
          gap: "5px",
          alignItems: "center",
          marginBottom: "16px",
          background: "#ffffff",
          minHeight: "38px",
        }}>
          {tags.map((tag, i) => (
            <span key={i} style={{
              background: "#E6F1FB",
              color: "#185FA5",
              fontSize: "11px",
              padding: "2px 8px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontWeight: "500",
            }}>
              #{tag}
              <button
                onClick={() => removeTag(tag)}
                style={{ background: "none", border: "none", color: "#378ADD", cursor: "pointer", fontSize: "13px", lineHeight: 1, padding: 0 }}
              >
                ×
              </button>
            </span>
          ))}
          <input
            style={{
              border: "none",
              outline: "none",
              fontSize: "12px",
              color: "#2C2C2A",
              background: "transparent",
              width: "90px",
              fontFamily: "inherit",
            }}
            placeholder="Add tag + Enter"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
          />
        </div>

        
        <div style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "8px",
          paddingTop: "12px",
          borderTop: "0.5px solid #D3D1C7",
        }}>
          <button
            onClick={close}
            style={{
              background: "transparent",
              border: "0.5px solid #B4B2A9",
              borderRadius: "8px",
              padding: "7px 16px",
              fontSize: "13px",
              color: "#5F5E5A",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            style={{
              background: "#185FA5",
              color: "#E6F1FB",
              border: "none",
              borderRadius: "8px",
              padding: "7px 20px",
              fontSize: "13px",
              fontWeight: "500",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {isEdit ? "Update" : "Add Task"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;