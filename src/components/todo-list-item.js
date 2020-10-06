import React from "react";

const TodoListItem = (prop) => {
  return (
    <span
      style={{
        color: prop.important ? "tomato" : "black",
      }}
    >
      {prop.label}
    </span>
  );
};

export default TodoListItem;
