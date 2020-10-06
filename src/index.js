import React from "react";
import ReactDom from "react-dom";

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  return <input placeholder="search" />;
};

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build awesome App</li>
    </ul>
  );
};

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
