import React, { Component } from "react";
import "../styles/App.css";
import { WikiAPI } from "../api/WikiAPI";
import { ProcessJSON } from "../api/ProcessJSON";
import { Preview } from "./Preview";
import { RandomArticleButton } from "./RandomArticleButton";
import { PreviewList } from "./PreviewList";

export class Body extends Component {
  constructor() {
    super();

    this.state = {
      previews: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  async handleClick() {
    let searchQuery = document.getElementById("request").value;
    const pageList = await WikiAPI.getPages(encodeURIComponent(searchQuery));
    this.renderPreviews(pageList);
  }

  renderPreviews(pageList) {
    let data = ProcessJSON.makePrettyer(pageList);
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
  }

  onKeyPress(event) {
    if (event.key === "Enter") {
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <input
            id="request"
            type="search"
            className="form-control"
            onKeyPress={this.onKeyPress}
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
