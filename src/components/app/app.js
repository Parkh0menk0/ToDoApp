import React, { Component } from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ItemAddForm from "../item-add-form/item-add-form";

import "./app.css";

export default class App extends Component {
  constructor() {
    super();

    this.generateId = 100;

    this.state = {
      todoData: [
        { label: "Drink Coffee", important: false, id: 1 },
        { label: "Make Awesome App", important: true, id: 2 },
        { label: "Have a lunch", important: false, id: 3 },
      ],
    };

    this.deleteItem = (id) => {
      this.setState(({ todoData }) => {
        const index = todoData.findIndex((el) => el.id === id);
        const updated = [
          ...todoData.slice(0, index),
          ...todoData.slice(index + 1),
        ];
        return {
          todoData: updated
        };
      });
    };

    this.addItem = (text) => {
      this.setState(({ todoData }) => {
        return {
          todoData: [
            ...todoData,
            {
              label: text,
              important: false,
              id: this.generateId++
            }
          ]
        };
      });
    };

    this.onDoneToggle = (id) => {
      console.log(id);
    }

    this.onImportantToggle = (id) => {
      console.log(id);
    }
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />

        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleteHandle={this.deleteItem}
          onDoneToggle={this.onDoneToggle}
          onImportantToggle={this.onImportantToggle}
        />

        <ItemAddForm addItem={this.addItem} />
      </div>
    );
  }
}
