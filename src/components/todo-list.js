import React from "react";

import TodoListItem from "./todo-list-item.js"

const TodoList = (prop) => {
  return (
    <ul>
      {prop.todos.map(element => <li key={element.id}><TodoListItem label={element.label} important={element.important} /></li>)}
    </ul>
  );
};

export default TodoList;
