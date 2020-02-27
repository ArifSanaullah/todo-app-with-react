import React, { Component, Fragment } from "react";
import TodoItem from "../ToDoItem.component/ToDoItem.component";
import style from "./ToDoList.module.css";

export default class ToDoList extends Component {
  render() {
    const { todos } = this.props;
    // Conditional rendering should be done inside render like below
    // Every LI will be made now not UL on each iteration
      return (
        <Fragment>
          <ul className={style.todoList}>
            {todos &&
              Boolean(todos.length) &&
              todos.map((item, index) => (
                <TodoItem
                  todo={item}
                  key={index}
                  deleteHandler={this.props.deleteHandler}
                />
              ))}
          </ul>
        </Fragment>
      );
  }
}
