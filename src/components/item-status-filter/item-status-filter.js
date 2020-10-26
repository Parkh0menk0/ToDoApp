import React, { Component } from "react";

import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {

  render() {

    const { filter, onFilterChange } = this.props;

    return (
      <div className="btn-group">
        <button type="button" className={filter === "all" ? "btn btn-info" : "btn btn-outline-secondary"} onClick={(evt) => {onFilterChange(evt.target.textContent.toLowerCase())}}>
          All
        </button>
        <button type="button" className={filter === "active" ? "btn btn-info" : "btn btn-outline-secondary"} onClick={(evt) => onFilterChange(evt.target.textContent.toLowerCase())}>
          Active
        </button>
        <button type="button" className={filter === "done" ? "btn btn-info" : "btn btn-outline-secondary"} onClick={(evt) => onFilterChange(evt.target.textContent.toLowerCase())}>
          Done
        </button>
      </div>
    );
  }
}
