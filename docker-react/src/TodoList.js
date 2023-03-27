import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' }
  ]);
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleAddTask = () => {
    if (inputValue !== '') {
      const newTask = {
        id: Math.random(),
        text: inputValue
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };
  
  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };
  
  return (
    <div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TodoList;
