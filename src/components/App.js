import React, { Component } from "react";
import "../styles/App.css";
import { Header } from "./Header";
import { Body } from "./Body";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
