import React, { Component } from "react";
import style from "./ToDoItem.module.css";

export default class ToDoItem extends Component {
  render() {
    return (
      <li className={style.todoItem}>
        <div className={style.todoContent}>{this.props.todo}</div>
        <div
          onClick={() => this.props.deleteHandler(this.props.todo)}
          className={style.deleteButton}
        >
          X
        </div>
      </li>
    );
  }
}
