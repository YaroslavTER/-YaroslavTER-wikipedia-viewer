import React, { Component } from "react";
import "../styles/App.css";

export class RandomArticleButton extends Component {
  render() {
    return (
      <div id="randomArticle">
        <a
          className="btn btn-outline-secondary"
          href="https://en.wikipedia.org/wiki/Special:Random"
          target="_blank"
        >
          <i className="fa fa-random" /> Get Article
        </a>
      </div>
    );
  }
}
