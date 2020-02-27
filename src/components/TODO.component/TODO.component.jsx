import React, { Component } from "react";
import style from "./TODO.module.css";
import TodoList from "../ToDoList.component/ToDoList.component";
import Input from "../Input.component/Input.component";
import Button from "../Button.component/Button.component";

export default class TODO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: "",
      finalTodos: []
      //added this key for search functionality. todo key will always contain all the elements and finalTodos will contain matching items( from searchTodo() ) only.
    };
  }

  // Use arrow functions. ES5 function syntax was used when react was first released so some developers prefer them
  // but in the latest style conventions arrow function is prefered
  handleChange = value => this.setState({ todo: value });

  // Dont handle sideffects insde setState function 
  addTodo = () => {
    const { todos, todo } = this.state;
    if (todo !== "") {
      const todosArray = [...todos, todo];
      this.setState({ todos: todosArray, finalTodos: todosArray, todo: "" });
    }
  };

  // use meaningful parameter names so any developer can identify just by reading the code once
  searchTodo = searchTerm => {
    const { todos } = this.state;
    const searchItem = new RegExp(searchTerm, "gi");
    const foundTodos = todos.filter(todo => todo.match(searchItem));
    this.setState({ finalTodos: foundTodos, todos: todos });
  };

  // Dont handle sideffects insde setState function 
  deleteTodo = searchVal => {
    const { todos } = this.state;
    const removedTodo = todos.filter(todo => todo !== searchVal);
    this.setState({ finalTodos: removedTodo, todos: removedTodo });
  };

  render() {
    return (
      <div className={style.TODO}>
        <div className={style.todoStarter}>
          <q>
            We will never finish everything on our to-do lists. It's not
            possible, and that is life :)
          </q>
          <q>Perfection is not attainable, but if we chase perfection we can catch excellence. --Vince Lombardi</q>

          <Input
            inputType="search"
            inputPlace="Search Todo"
            changeHandler={e => this.searchTodo(e.target.value)}
          />
          <Input
            textValue={this.state.todo}
            inputType="text"
            inputPlace="Add Todo"
            changeHandler={e => this.handleChange(e.target.value)}
          />
          <Button
            buttonValue="Add"
            clickHandler={this.addTodo}
            buttonClass="addButton"
          />
        </div>
        {this.state.todos && (
          <TodoList
            todos={this.state.finalTodos}
            deleteHandler={this.deleteTodo}
          />
        )}
      </div>
    );
  }
}
