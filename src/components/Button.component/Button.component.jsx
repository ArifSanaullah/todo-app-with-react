import React from "react";
import style from "./Button.module.css";

export default function Button({ clickHandler, buttonValue }) {
  return (
    <button onClick={clickHandler} className={style.addButton}>
      {buttonValue}
    </button>
  );
}
