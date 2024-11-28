import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTaskContext } from "../TaskContext";

const ListDetail = () => {
  const { id } = useParams();
  const { lists, addTask, selectedList, setSelectedList } = useTaskContext();
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName) {
      addTask(id, { task: taskName, priority, completed: false });
      setTaskName("");
    }
  };

  return (
    <div>
      <h1>{selectedList?.name || "Loading..."}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task Name"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default ListDetail;
