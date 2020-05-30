import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ButtonSection extends Component {
  render() {
    return (
      <div className="button-section">
        <button
          style={{ cursor: "pointer" }}
          className="quote-button"
          onClick={this.props.handleButtonClick}
          title="Fetch Quote"
        >
          GET-ME-A-QOUTE
          <FontAwesomeIcon icon={['fas', 'peace']} style={{marginLeft: "1rem", paddingBottom: "3px" , transform: "rotate(180deg)"}}  />
        </button>
      </div>
    );
  }
}

export default ButtonSection;
