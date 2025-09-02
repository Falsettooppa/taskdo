import { useState } from "react";

export default function Todo({ id, name, completed, toggleTaskCompleted, deleteTask, editTask }) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    editTask(id, newName);
    setEditing(false);
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full">
      <input
        type="text"
        className="border p-2 rounded flex-grow"
        value={newName}
        onChange={handleChange}
      />
      <button type="submit" className="px-3 py-1 bg-green-500 text-white rounded">
        Save
      </button>
      <button
        type="button"
        onClick={() => setEditing(false)}
        className="px-3 py-1 bg-gray-400 text-white rounded"
      >
        Cancel
      </button>
    </form>
  );

  const viewTemplate = (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <input
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleTaskCompleted(id)}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <label htmlFor={id} className={completed ? "line-through text-gray-500" : ""}>
          {name}
        </label>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setEditing(true)}
          className="text-blue-500 hover:text-blue-700 text-sm"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTask(id)}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );

  return (
    <li className="flex items-center justify-between p-2 bg-white rounded shadow">
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );
}
