import React, { Component } from "react";
import { nanoid } from "nanoid";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ItemAddForm from "../item-add-form/item-add-form";

import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoData: [
        this.createItem("Drink Coffee"),
        this.createItem("Make Awesome App"),
        this.createItem("Have a lunch"),
      ],
    }
  }

  createItem = (label) => {
    return {
      label: label,
      done: false,
      important: false,
      id: nanoid(),
    };
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      const updated = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1),
      ];
      return {
        todoData: updated,
      };
    });
  };

  addItem = (text) => {
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, this.createItem(text)],
      };
    });
  };

  onDoneToggle = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[index];
      const newItem = { ...oldItem, done: !oldItem.done };

      return {
        todoData: [
          ...todoData.slice(0, index),
          newItem,
          ...todoData.slice(index + 1),
        ],
      };
    });
  };

  onImportantToggle = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[index];
      const newItem = { ...oldItem, important: !oldItem.important };

      return {
        todoData: [
          ...todoData.slice(0, index),
          newItem,
          ...todoData.slice(index + 1),
        ],
      };
    });
  };

  render() {
    const { todoData } = this.state;

    const toDoCount = todoData.filter((item) => !item.done).length;
    const doneCount = todoData.filter((item) => item.done).length;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount} />

        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todoData}
          onDeleteHandle={this.deleteItem}
          onDoneToggle={this.onDoneToggle}
          onImportantToggle={this.onImportantToggle}
        />

        <ItemAddForm addItem={this.addItem} />
      </div>
    );
  }
}
