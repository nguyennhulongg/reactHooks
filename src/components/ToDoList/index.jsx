import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss'

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
};

function TodoList(props) {
    const { todos, onTodoClick, addTask, editTask } = props;
    const [inputValue, setInputValue] = useState('');

    function handleClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo); 
        }
    }

    const data = {
        title: inputValue,
        id: Math.floor(Math.random() * 1000),
    }

    function handleAdd(data) {
        addTask(data); 
        setInputValue('');
    }

    function handleOnChange(event) {
        const inputTask = event.target.value;
        setInputValue(inputTask);
    }

    

    return (
        <div className='wrapper'>
            <h1>Todo List</h1>
            <div className='addTask'>
                <input className='input' placeholder='Text some task...' type="text" value={inputValue} onChange={handleOnChange} />
            </div>
            <button onClick= {() => handleAdd(data)} className='button'>Add a new task</button>
            <ul className="todo-list">
                {todos.map(todo => (
                    <li 
                        key={ todo.id }
                        className='item'
                        >
                        { todo.title }
                        <div className="icon">
                            <i class="fa-solid fa-pen-to-square"></i>
                            <i onClick= {() => handleClick(todo.id)} class="fa-solid fa-trash"></i>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;