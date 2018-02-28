import React, { Component } from "react";
import "../styles/App.css";

export class PreviewList extends Component {
  render() {
    return (
      <div id="previews" className="mb-5">
        {this.props.previews}
      </div>
    );
  }
}
