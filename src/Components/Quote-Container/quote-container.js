import React, { Component } from "react";
import ButtonComponent from "../Button-Section/button-section";
import axios from "axios";

class QuoteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "LOADING...",
      isLoading: true
    };
    this.getQuoteFunction = this.getQuoteFunction.bind(this);
  }

  componentDidMount() {
    this.getQuoteFunction();
  }

  // Function for fetching the quote from the API

  getQuoteFunction() {
    axios
      .get("https://api.kanye.rest")
      .then(response => {
        this.setState({
          quote: " ' " + response.data.quote + " ' ",
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          quote: "An error has occured !"
        });
      });
  }

  render() {
    return (
      <div>
        <div className="center-container">
          <div className="quote-container">{this.state.quote}</div>
        </div>
        <ButtonComponent handleButtonClick={this.getQuoteFunction} />
      </div>
    );
  }
}

export default QuoteContainer;
