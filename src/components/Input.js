import React, { Component } from "react";
import "../styles/App.css";

export class Input extends Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="search"
          className="form-control"
          placeholder="Search articles..."
          aria-label="Search articles..."
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
    );
  }
}
