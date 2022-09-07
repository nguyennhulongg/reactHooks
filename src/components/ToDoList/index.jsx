import { useEffect, useState } from 'react';

import './style.scss';

const TodoList = (props) => {
  const {
    todos,
    onTodoClick,
    addTask,
    taskUpdate,
    editTask,
    handleUpdate: triggerUpdate,
  } = props;
  const [inputValue, setInputValue] = useState('');

  const handleClick = (todo) => {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  };

  const handleAdd = () => {
    addTask({
      title: inputValue,
      id: Math.floor(Math.random() * 1000),
    });
    setInputValue('');
  };

  const handleUpdate = (id) => {
    triggerUpdate({
      title: inputValue,
      id: id,
    });
    setInputValue('');
  };

  const handleOnChange = (event) => {
    const inputTask = event.target.value;
    setInputValue(inputTask);
  };

  useEffect(() => {
    setInputValue(taskUpdate.title);
  }, [taskUpdate.title]);

  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <div className="addTask">
        <input
          className="input"
          placeholder="Text some task..."
          type="text"
          value={inputValue}
          onChange={handleOnChange}
        />
      </div>

      {taskUpdate.title ? (
        <button
          onClick={() => handleUpdate(taskUpdate.id)}
          className="button update"
        >
          Update task
        </button>
      ) : (
        <button onClick={() => handleAdd()} className="button">
          Add a new task
        </button>
      )}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="item">
            {todo.title}
            <div className="icon">
              <i
                className="fa-solid fa-pen-to-square"
                onClick={() => editTask(todo.id)}
              />
              <i
                onClick={() => handleClick(todo.id)}
                className="fa-solid fa-trash"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
