import React, { Component } from "react";
import "../styles/App.css";
import { Preview } from "./Preview";
import { WikiAPI } from "../api/WikiAPI";
import { ProcessJSON } from "../api/ProcessJSON";

export class PreviewList extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
    this.state = {
      previews: []
    };
  }

  handleClick() {
    let searchQuery = encodeURIComponent(this.props.searchRequest);
    console.log(searchQuery);
    fetch(WikiAPI.url + searchQuery)
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
      <div id="previews" className="mb-5">
        {this.state.previews}
      </div>
    );
  }
}
