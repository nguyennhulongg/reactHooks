import { useState } from 'react';
import './App.scss';
import TodoList  from "./components/ToDoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  const removeTask = (id) => {
    const newTodoList = [...todoList];
    const index = newTodoList.findIndex(item => item.id === id);
    
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  const addTask = (task) => {
    setTodoList([...todoList, task]);
  } 

  return (
    <div className="app">
        <TodoList 
        todos = { todoList }  
        onTodoClick={removeTask} 
        addTask = { addTask } /> 
    </div>
  );
}

export default App;
