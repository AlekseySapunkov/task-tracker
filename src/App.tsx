import { useState } from "react";

interface Task {
  id: number;
  text: string;
  done: boolean;
}
export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [editTask, setEditTask] = useState<Task | null>(null);
  const addTask = () => {
    if (newTask.trim() === "") return;

    const task: Task = {
      id: Date.now(),
      text: newTask.trim(),
      done: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="p-6 bg-white rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl mb-4 text-center">Трекер задач</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="border p-2 flex-grow rounded"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Новая задача"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 rounded hover:bg-blue-700 transition"
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
}
