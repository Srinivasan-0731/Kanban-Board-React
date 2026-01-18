
import Board from "./components/Board";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen p-6 bg-gray-100 bg">
        <h1 className="text-4xl font-extrabold text-center mb-6">
          Kanban Board
        </h1>
        <Board />
      </div>
    </TaskProvider>
  );
}

export default App;