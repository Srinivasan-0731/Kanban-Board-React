import Board from "./components/Board";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <div style={{ minHeight: "100vh", background: "#F1EFE8", padding: "24px" }}>
        <h1 style={{
          fontSize: "24px",
          fontWeight: "600",
          textAlign: "center",
          marginBottom: "24px",
          color: "#2C2C2A",
          letterSpacing: "-0.3px"
        }}>
          Kanban Board
        </h1>
        <Board />
      </div>
    </TaskProvider>
  );
}

export default App;