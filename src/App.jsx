import { useState } from "react";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
  { id: "todo-3", name: "Code", completed: false },
  { id: "todo-4", name: "Read", completed: false },
  { id: "todo-5", name: "Exercise", completed: false }
];

function App() {
  const [tasks, setTasks] = useState(DATA);

  return (
    <div className="todoapp stack-large">
      <h1>Taskdo</h1>

      {/* Add Task Form */}
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>

      {/* Filter Buttons */}
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>All</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>

      {/* Dynamic Task Count */}
      <h2 id="list-heading">
        {tasks.filter((task) => !task.completed).length} tasks remaining
      </h2>

      {/* Task List */}
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {tasks.map((task) => (
          <li className="todo stack-small" key={task.id}>
            <div className="c-cb">
              <input id={task.id} type="checkbox" defaultChecked={task.completed} />
              <label className="todo-label" htmlFor={task.id}>
                {task.name}
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">{task.name}</span>
              </button>
              <button type="button" className="btn btn__danger">
                Delete <span className="visually-hidden">{task.name}</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
