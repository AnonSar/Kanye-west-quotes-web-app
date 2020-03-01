import React, { Component } from "react";
import axios from "axios";

class QuoteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        quote: "",
        isLoading: true
    };
  }

  componentDidMount() {
    axios.get("https://api.kanye.rest").then((response)=>{
        this.setState({
            quote:response.data.quote,
            isLoading: false
        })
    })
  }

  render() {
    return (
      <div className="center-container">
        <div className="quote-container">{" ' " + this.state.quote + " ' "}</div>
      </div>
    );
  }
}

export default QuoteContainer;
