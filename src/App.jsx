import { TaskProvider } from "./context/TaskContext";
import AddTask from "./components/AddTask";
import Board from "./components/Board";

function App() {
  return (
    <TaskProvider>
      <AddTask />
      <Board />
    </TaskProvider>
  )
}

export default App;