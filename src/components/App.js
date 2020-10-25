import React, { Component } from "react";
import Quote from "./quote";

import "../styles/index.css";
import backgroundImage from "./images/ronSwansonBg.png";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
    };
  }
  render() {
    return (
      <div
        className="App"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div></div>

        <Quote />
      </div>
    );
  }
}

export default App;
