import React from "react";
import style from "./ToDoItem.module.css";

export default function ToDoItem({ deleteHandler, todo }) {
  return (
    <li className={style.todoItem}>
      <div className={style.todoContent}>{todo}</div>
      <div onClick={() => deleteHandler(todo)} className={style.deleteButton}>
        X
      </div>
    </li>
  );
}
