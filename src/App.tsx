import { useState } from "react";

interface Task {
  id: number;
  text: string;
  done: boolean;
}
export default function App() {
  const [tasks, setTasks] = useState<
    { id: number; text: string; done: boolean }[]
  >([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [editTask, setEditTask] = useState<Task | null>(null);
  const addTask = () => {
    const trimmedNormilizedInput = newTask.trim().toLowerCase();
    if (trimmedNormilizedInput === "") {
      setError("Данное поле должно быть заполнено");
      return;
    }
    const exists = tasks.find(
      (task) => task.text.trim().toLowerCase() === trimmedNormilizedInput
    );
    if (exists) {
      setError("Такая задача уже есть");
      return;
    }
    if (trimmedNormilizedInput.length < 3) {
      setError("Текст задачи должен быть более 3 символов");
      return;
    }
    const task: Task = {
      id: Date.now(),
      text:
        trimmedNormilizedInput.charAt(0).toUpperCase() +
        trimmedNormilizedInput.slice(1),
      done: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
    setError(null);
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
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
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
