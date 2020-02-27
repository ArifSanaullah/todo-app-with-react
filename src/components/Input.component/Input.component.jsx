import React from "react";

export default function ToDoInput({
  textValue,
  inputType,
  inputPlace,
  changeHandler
}) {
  return (
    <div>
      <input
        value={textValue}
        type={inputType}
        placeholder={inputPlace}
        onChange={changeHandler}
      />
    </div>
  );
}
