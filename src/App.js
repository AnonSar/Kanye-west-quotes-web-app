import React, { Component } from "react";
import HeadingSection from "./Components/Heading-Section/heading-section";
import BackgroundVideo from "./Components/Background-video/background-video";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <BackgroundVideo />
        <HeadingSection />
      </div>
    );
  }
}

export default App;
