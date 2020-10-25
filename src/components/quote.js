import React, { Component } from "react";

class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "Ron Swanson",
    };
  }

  inRange(x, min, max) {
    return (x - min) * (x - max) <= 0;
  }

  getPortfolioItems = async () => {
    const randomLine = Math.floor(Math.random() * 109);
    const quotesPromise = await fetch("http://localhost:5000/quotes");
    const quotes = await quotesPromise.json();
    return (document.getElementById("quote").innerHTML =
      quotes[Number(randomLine)]["line"]);
  };

  render() {
    return (
      <div className="quote-wrapper">
        <div className="button-wrapper">
          <button
            className="quote-button"
            onClick={this.getPortfolioItems}
            style={{ outline: "none;" }}
          >
            GET A QUOTE
          </button>
        </div>
        <div className="quote-content">
          <h2>RON SWANSON SAYS:</h2>
          <p id="quote"></p>
        </div>
      </div>
    );
  }
}
export default Quote;
