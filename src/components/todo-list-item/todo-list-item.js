import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  constructor() {
    super();

    this.state = {
      done: false,
      important: false
    }

    this.onLabelClick = () => this.setState(({ done }) => ({done: !done}));
    this.onImportantClick = () => this.setState(({ important }) => ({important: !important}));
  }

  render() {
    const { label, onDeleteHandle } = this.props;
    const { done, important } = this.state;

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
        <span className="todo-list-item-label" style={style} onClick={this.onLabelClick}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onImportantClick}
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
  }
}
