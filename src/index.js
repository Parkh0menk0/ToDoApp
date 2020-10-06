import React from "react";
import ReactDom from "react-dom";

import AppHeader from "./components/app-header.js";
import SearchPanel from "./components/search-panel.js";
import TodoList from "./components/todo-list.js";

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
