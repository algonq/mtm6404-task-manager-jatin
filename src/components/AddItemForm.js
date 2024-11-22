import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";

const AddItemForm = ({ listId }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const { dispatch } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch({
      type: "ADD_TASK",
      payload: { listId, task: { id: Date.now(), task, priority, completed: false } },
    });
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <input
        type="text"
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddItemForm;
