import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  constructor() {
    super();

    this.state = {
      label: "",
    };

    this.onLabelChange = (evt) => this.setState({ label: evt.target.value });
    this.onFormSubmit = (evt) => {
      evt.preventDefault();
      this.props.addItem(this.state.label)
      this.setState({
        label: ""
      });
    };
  }

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onFormSubmit}>
        <input
          className="form-control"
          type="text"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          value={this.state.label}
        />
        <button
          className="btn btn-outline-secondary"
        >
          Add item
        </button>
      </form>
    );
  }
}
