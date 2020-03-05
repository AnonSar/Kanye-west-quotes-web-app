import React, { Component } from "react";

class ButtonSection extends Component {
  render() {
    return (
      <div className="button-section">
        <button className="quote-button" onClick = {this.props.handleButtonClick}>GET ME THE QOUTE</button>
      </div>
    );
  }
};

export default ButtonSection;
