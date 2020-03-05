import React, { Component } from "react";

class ButtonSection extends Component {
  render() {
    return (
      <div className="button-section">
        <button className="quote-button" onClick = {this.props.handleButtonClick}>CLICK ME</button>
      </div>
    );
  }
};

export default ButtonSection;
