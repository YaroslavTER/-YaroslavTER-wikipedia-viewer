import React, { Component } from "react";
import "../styles/App.css";
import { Preview } from "./Preview";

export class PreviewList extends Component {
  searchResults = [
    {
      name: "qwerty",
      description: "description",
      link: "https://github.com/YaroslavTER/-YaroslavTER-wikipedia-viewer"
    },
    {
      name: "qwerty",
      description: "description",
      link: "https://github.com/YaroslavTER/-YaroslavTER-wikipedia-viewer"
    },
    {
      name: "qwerty",
      description: "description",
      link: "https://github.com/YaroslavTER/-YaroslavTER-wikipedia-viewer"
    },
    {
      name: "qwerty",
      description: "description",
      link: "https://github.com/YaroslavTER/-YaroslavTER-wikipedia-viewer"
    }
  ];

  render() {
    return (
      <div id="previews" className="mb-5">
        {this.searchResults.map((element, i) => (
          <Preview
            key={element.name + i}
            name={element.name}
            description={element.description}
            link={element.link}
          />
        ))}
      </div>
    );
  }
}
