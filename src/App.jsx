import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Eat", completed: false },
    { id: 2, text: "Sleep", completed: false },
    { id: 3, text: "Repeat", completed: false },
    { id: 4, text: "Code", completed: false },
    { id: 5, text: "Exercise", completed: false },
    { id: 6, text: "Read", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  // Add new task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    const newEntry = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
    };
    setTasks([...tasks, newEntry]);
    setNewTask("");
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6">
        {/* App Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Taskdo
        </h1>

        {/* Input Form */}
        <form className="flex gap-2 mb-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="What needs to be done?"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Add
          </button>
        </form>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-6">
          <button className="px-3 py-1 rounded-lg bg-blue-500 text-white font-medium">
            All
          </button>
          <button className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition">
            Active
          </button>
          <button className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition">
            Completed
          </button>
        </div>

        {/* Task List */}
        <h2 className="font-semibold text-lg mb-4 text-gray-700">
          {tasks.filter((t) => !t.completed).length} tasks remaining
        </h2>
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-3 border rounded-lg hover:shadow-md transition"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  className="w-5 h-5"
                />
                <label
                  className={`font-medium ${
                    task.completed ? "line-through text-gray-400" : "text-gray-800"
                  }`}
                >
                  {task.text}
                </label>
              </div>
              <div className="flex gap-2">
                <button className="px-2 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition">
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
