import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span>{task.taskName}</span>
      <span>Priority: {task.priority}</span>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task)}
      />
      <button onClick={() => deleteTask(task)}>Delete</button>
    </div>
  );
};

export default TaskItem;
