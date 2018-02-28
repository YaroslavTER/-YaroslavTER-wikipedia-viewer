import React, { Component } from "react";
import "../styles/App.css";
import { WikiAPI } from "../api/WikiAPI";
import { ProcessJSON } from "../api/ProcessJSON";
import { Preview } from "./Preview";
import { RandomArticleButton } from "./RandomArticleButton";
import { PreviewList } from "./PreviewList";

export class Input extends Component {
  constructor() {
    super();

    this.state = {
      previews: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let searchQuery = document.getElementById("request").value;
    console.log(searchQuery);
    fetch(WikiAPI.url + encodeURIComponent(searchQuery))
      .then(result => result.json())
      .then(json => {
        let data = ProcessJSON.makePrettyer(json);
        let previews = data.map((preview, i) => {
          return (
            <Preview
              key={preview.name + i}
              name={preview.name}
              description={preview.description}
              link={preview.link}
            />
          );
        });
        this.setState({ previews: previews });
      });
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
        <PreviewList previews={this.state.previews} />
      </div>
    );
  }
}
