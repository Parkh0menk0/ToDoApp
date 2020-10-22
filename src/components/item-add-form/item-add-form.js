import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: "",
    };

    this._onLabelChange = this._onLabelChange.bind(this);
    this._onFormSubmit = this._onFormSubmit.bind(this);
  }

  _onLabelChange = (evt) => this.setState({ label: evt.target.value });

  _onFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.addItem(this.state.label)
    this.setState({
      label: ""
    });
  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this._onFormSubmit}>
        <input
          className="form-control"
          type="text"
          onChange={this._onLabelChange}
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
