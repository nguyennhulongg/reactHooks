import { useState } from 'react';

import './App.scss';
import TodoList from './components/ToDoList';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [taskUpdate, setTaskUpdate] = useState({ title: '', id: 0 });

  const removeTask = (id) => {
    const newTodoList = [...todoList];
    const index = newTodoList.findIndex((item) => item.id === id);

    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const addTask = (task) => {
    setTodoList([...todoList, task]);
  };

  const handleUpdate = (taskUpdated) => {
    const tasks = todoList.map((e) => {
      if (e.id === taskUpdated.id) e.title = taskUpdated.title;
      return e;
    });
    setTodoList(tasks);
    setTaskUpdate({ title: '', id: 0 });
  };

  const editTask = (taskId) => {
    const task = todoList.find((e) => e.id === taskId);
    setTaskUpdate(task);
  };

  return (
    <div className="app">
      <TodoList
        todos={todoList}
        onTodoClick={removeTask}
        addTask={addTask}
        taskUpdate={taskUpdate}
        editTask={editTask}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
