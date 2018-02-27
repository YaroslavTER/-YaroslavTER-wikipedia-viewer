import React, { Component } from "react";
import "../styles/App.css";

export class Preview extends Component {
  render() {
    return (
      <a
        href={this.props.link}
        className="card bg-light text-dark mt-3"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="card-body">
          <div className="preview">
            <div className="preview-header">{this.props.name}</div>
            <div className="preview-description">{this.props.description}</div>
          </div>
        </div>
      </a>
    );
  }
}
