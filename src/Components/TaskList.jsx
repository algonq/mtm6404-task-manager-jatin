import React from 'react';
import Task from './Task';

const tasks = [
  { id: 1, title: 'Task 1', description: 'Description for Task 1' },
  { id: 2, title: 'Task 2', description: 'Description for Task 2' },
  { id: 3, title: 'Task 3', description: 'Description for Task 3' },
  { id: 4, title: 'Task 4', description: 'Description for Task 4' },
  { id: 5, title: 'Task 5', description: 'Description for Task 5' },
];

function TaskList() {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map(task => <Task key={task.id} title={task.title} description={task.description} />)
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
}

export default TaskList;
