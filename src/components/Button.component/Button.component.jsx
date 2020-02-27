import React, { Component } from "react";
import style from "./Button.module.css";

// Should be functional component
export default class Button extends Component {
  render() {
    return (
      <button onClick={this.props.clickHandler} className={style.addButton}>
        {this.props.buttonValue}
      </button>
    );
  }
}
