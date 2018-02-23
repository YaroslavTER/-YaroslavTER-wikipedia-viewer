import React, { Component } from "react";
import "../styles/App.css";

export class Input extends Component {
  render() {
    return (
      <div class="input-group mb-3">
        <input
          type="search"
          class="form-control"
          placeholder="Search articles..."
          aria-label="Search articles..."
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">
            <i class="fa fa-search" />
          </button>
        </div>
      </div>
    );
  }
}
