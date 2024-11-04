import React from 'react';

const TaskList = ({ tasks, toggleComplete, deleteTask, showCompleted }) => (
  <ul className="task-list">
    {tasks
      .filter(task => showCompleted || !task.completed)
      .sort((a, b) => a.priority.localeCompare(b.priority))
      .map((task, index) => (
        <li
          key={index}
          className={`task-item priority-${task.priority.toLowerCase()}`}
        >
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          >
            {task.taskName} ({task.priority})
          </span>
          <div className="task-actions">
            <button className="complete-btn" onClick={() => toggleComplete(task)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button className="delete-btn" onClick={() => deleteTask(task)}>Delete</button>
          </div>
        </li>
      ))}
  </ul>
);

export default TaskList;
