// TaskForm.js
import React, { useState } from 'react';

function TaskForm({ addTask }) {
    const [taskName, setTaskName] = useState('');
    const [priority, setPriority] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(taskName, priority);
        setTaskName('');
        setPriority('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Task Name" 
                value={taskName} 
                onChange={(e) => setTaskName(e.target.value)} 
            />
            <select 
                value={priority} 
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;
