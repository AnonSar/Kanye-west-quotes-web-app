import React, { Component } from "react";

class ButtonSection extends Component {
  render() {
    return (
      <div className="button-section">
        <button
          style={{ cursor: "pointer" }}
          className="quote-button"
          onClick={this.props.handleButtonClick}
        >
          GET-ME-A-QOUTE
        </button>
      </div>
    );
  }
}

export default ButtonSection;
