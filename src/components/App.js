import React, { Component } from "react";
import "../styles/App.css";
import { Header } from "./Header";
import { Input } from "./Input";
import { RandomArticleButton } from "./RandomArticleButton";
import { PreviewList } from "./PreviewList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <Input />
      </div>
    );
  }
}

export default App;
