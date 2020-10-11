import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleteHandle, onDoneToggle, onImportantToggle }) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps }
          onDeleteHandle={() => onDeleteHandle(id)}
          onDoneToggle={() => onDoneToggle(id)}
          onImportantToggle={() => onImportantToggle(id)}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
