import React, { Component } from "react";
import "../styles/App.css";

export class Loader extends Component {
  render() {
    return (
      <div className="mt-3 d-flex justify-content-center">
        <div className="loader" />
      </div>
    );
  }
}
