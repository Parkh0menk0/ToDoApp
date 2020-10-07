import React from "react";
import ReactDom from "react-dom";

import AppHeader from "./components/app-header.js";
import SearchPanel from "./components/search-panel.js";
import TodoList from "./components/todo-list.js";

const App = () => {

  const todoData = [
    {label: "Drink Cofee", important: false, id: 1},
    {label: "Make awesome App", important: true, id: 2},
    {label: "Have a lunch", important: false, id: 3},
    {label: "Learn React", important: true, id: 4},
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
