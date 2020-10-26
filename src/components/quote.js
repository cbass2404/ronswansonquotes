import React, { Component } from "react";

class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      quote: "",
      isLoading: true,
    };
  }

  getPortfolioItems = async () => {
    const quotesPromise = await fetch("http://localhost:5000/quotes");
    const quotes = await quotesPromise.json();
    this.setState({ quotes });
    this.setState({ isLoading: false });
  };

  handleSingleQuote = () => {
    const randomLine = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({ quote: this.state.quotes[randomLine].line });
  };

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) return <div>Loading...</div>;
    return (
      <div className="quote-wrapper">
        <div className="button-wrapper">
          <button
            className="quote-button"
            onClick={this.handleSingleQuote}
            style={{ outline: "none" }}
          >
            GET A QUOTE
          </button>
        </div>
        <div className="quote-content">
          <h2>RON SWANSON SAYS:</h2>
          <p id="quote">{this.state.quote}</p>
        </div>
      </div>
    );
  }
}
export default Quote;
