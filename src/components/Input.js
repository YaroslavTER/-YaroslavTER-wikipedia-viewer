import React, { Component } from "react";
import "../styles/App.css";

export class Input extends Component {
  render() {
    return (
      <div class="input-group mb-3">
        <input
          id="searchQuery"
          type="input"
          class="form-control"
          placeholder="Search article"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <button
          id="search"
          class="input-group-addon btn btn-outline-secondary"
          type="button"
        >
          <i class="fa fa-search" />
        </button>
      </div>
    );
  }
}
