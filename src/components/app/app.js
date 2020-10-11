import React, { Component } from "react";
import { nanoid } from 'nanoid';

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ItemAddForm from "../item-add-form/item-add-form";

import "./app.css";

export default class App extends Component {
  constructor() {
    super();

    this.createItem = (label) => {
      return {
        label: label,
        done: false,
        important: false,
        id: nanoid()
      }
    };

    this.state = {
      todoData: [
        this.createItem("Drink Coffee"),
        this.createItem("Make Awesome App"),
        this.createItem("Have a lunch")
      ]
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
          todoData: [...todoData, this.createItem(text)]
        };
      });
    };

    this.onDoneToggle = (id) => {
      this.setState(({ todoData }) => {
        const index = todoData.findIndex((el) => el.id === id);
        const oldItem = todoData[index];
        const newItem = {...oldItem, done: !oldItem.done};

        return {
          todoData: [
            ...todoData.slice(0, index),
            newItem,
            ...todoData.slice(index + 1)
          ]
        }
      });
    }

    this.onImportantToggle = (id) => {
      this.setState(({ todoData }) => {
        const index = todoData.findIndex((el) => el.id === id);
        const oldItem = todoData[index];
        const newItem = {...oldItem, important: !oldItem.important};
        
        return {
          todoData: [
            ...todoData.slice(0, index),
            newItem,
            ...todoData.slice(index + 1)
          ]
        }
      });
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
