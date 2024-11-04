import './App.css';

import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([
    { taskName: "Buy groceries", priority: "High", completed: false },
    { taskName: "Complete React project", priority: "Medium", completed: false },
    { taskName: "Go for a run", priority: "Low", completed: true }
  ]);
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const toggleComplete = (taskToToggle) => {
    setTasks(tasks.map(task =>
      task === taskToToggle ? { ...task, completed: !task.completed } : task
    ));
  };
  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? "Hide" : "Show"} Completed Tasks
      </button>
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        showCompleted={showCompleted}
      />
    </div>
  );
};

export default App;
