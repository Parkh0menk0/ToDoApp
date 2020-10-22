import React from "react";

import "./todo-list-item.css";

const TodoListItem = ({label, onDeleteHandle, onDoneToggle, onImportantToggle, done, important}) => {

  let itemClassName = "todo-list-item";

  if (done) {
    itemClassName += " done";
  }

  if (important) {
    itemClassName += " important";
  }

  const style = {
    color: important ? "steelblue" : "black",
    fontWeight: important ? "bold" : "normal",
  };

  return (
    <span className={itemClassName}>
      <span
        className="todo-list-item-label"
        style={style}
        onClick={onDoneToggle}
      >
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onImportantToggle}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleteHandle}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
