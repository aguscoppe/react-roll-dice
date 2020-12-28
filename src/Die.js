import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    const rolling = this.props.rolling && "rolling";

    return (
      <i className={`Die fas fa-dice-${this.props.number} ${rolling}`}></i>
    );
  }
}

export default Die;
