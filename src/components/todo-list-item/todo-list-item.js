import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  constructor() {
    super();

    this.state = {
      done: false
    }

    this.onLabelClick = () => {
      this.setState({
        done: true
      });
    };
  }

  render() {
    const { label, important = false } = this.props;
    const { done } = this.state;

    let itemClassName = "todo-list-item";

    if (done) {
      itemClassName += " done";
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
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
