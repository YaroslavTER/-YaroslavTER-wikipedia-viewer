import React, { Component } from "react";
import "../styles/App.css";
import { WikiPages } from "../api/WikiPages";
import { ProcessJSON } from "../api/ProcessJSON";
import { Preview } from "./Preview";
import { RandomArticleButton } from "./RandomArticleButton";
import { PreviewList } from "./PreviewList";
import { NotFound } from "./NotFound";
import { Loader } from "./Loader";

export class Body extends Component {
  constructor() {
    super();

    this.state = {
      searchResult: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  handleClick() {
    this.setState({ searchResult: <Loader /> });
    let searchQuery = document.getElementById("request").value;
    if (searchQuery) {
      this.pullPagesData(searchQuery);
    } else {
      this.setState({ searchResult: null });
    }
  }

  async pullPagesData(searchQuery) {
    let encodedSearchQuery = encodeURIComponent(searchQuery);
    let pageList = await WikiPages.getPages(encodedSearchQuery);
    this.renderPreviews(pageList);
  }

  renderPreviews(pageList) {
    let data = ProcessJSON.makePrettyer(pageList);
    let previews;
    if (data.length > 0) {
      previews = data.map((preview, i) => {
        return (
          <Preview
            key={preview.name + i}
            name={preview.name}
            description={preview.description}
            link={preview.link}
          />
        );
      });
    } else {
      previews = <NotFound />;
    }
    this.setState({ searchResult: previews });
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
            autoFocus
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
        <PreviewList previews={this.state.searchResult} />
      </div>
    );
  }
}
