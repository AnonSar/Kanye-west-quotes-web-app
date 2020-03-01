import React, { Component } from "react";
import ButtonSection from "./Components/Button-Section/button-section";
import QuoteContainer from "./Components/Quote-Container/quote-container";
import HeadingSection from "./Components/Heading-Section/heading-section"

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <HeadingSection />
        <QuoteContainer />
        <ButtonSection />
      </div>
    );
  }
}

export default App;
