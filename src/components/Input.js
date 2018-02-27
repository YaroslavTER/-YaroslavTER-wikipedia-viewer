import React, { Component } from "react";
import "../styles/App.css";

import { RandomArticleButton } from "./RandomArticleButton";
import { PreviewList } from "./PreviewList";

export class Input extends Component {
  constructor() {
    super();

    this.state = {
      searchRequest: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ searchRequest: document.getElementById("request").value });
  }

  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <input
            id="request"
            type="search"
            className="form-control"
            placeholder="Search articles..."
            aria-label="Search articles..."
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              onClick={this.handleClick}
              type="button"
            >
              <i className="fa fa-search" />
            </button>
          </div>
        </div>

        <RandomArticleButton />
        <PreviewList searchRequest={this.state.searchRequest} />
      </div>
    );
  }
}
