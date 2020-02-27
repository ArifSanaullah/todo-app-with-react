import React, { Component } from "react";
import TodoItem from "../ToDoItem.component/ToDoItem.component";
import style from "./ToDoList.module.css";

export default class ToDoList extends Component {
  render() {
    const { todos } = this.props;
    if (todos && todos.length) {
      return (
        <ul className={style.todoList}>
          {todos.map((item, index) => (
            <TodoItem
              todo={item}
              key={index}
              deleteHandler={this.props.deleteHandler}
            />
          ))}
        </ul>
      );
    } else return null;
  }
}
