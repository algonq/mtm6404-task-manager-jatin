// TaskItem.js
import React from 'react';

function TaskItem({ task, toggleComplete, deleteTask }) {
    return (
        <div>
            <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => toggleComplete(task.id)} 
            />
            <span>{task.name} - {task.priority}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
}

export default TaskItem;
