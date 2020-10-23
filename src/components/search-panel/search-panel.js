import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this._onSearchChange =this._onSearchChange.bind(this);
  }

  _onSearchChange = (evt) => {
    const term = evt.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    const {term} = this.state;

    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={term}
        onChange={this._onSearchChange}
      />
    );
  }
}
