import React from "react";
import { connect } from "react-redux";

import TodoItem from "../TodoItem";

const TodoList = ({ todos, filterType }) => {
  let _todos = [];
  let message = "";

  switch (filterType) {
    case "by done":
      _todos = todos.filter(todo => todo.isDone === true);
      message = "There is no done todos.";
      break;
    case "all":
      _todos = todos;
      message = "There is no todos. Add some";
      break;
    default:
      _todos = todos;
  }

  _todos = _todos.map(todo => (
    <li
      key={todo.id}
      className={`collection-item todo ${todo.isDone ? "is-done" : ""}`}
    >
      <TodoItem todo={todo} />
    </li>
  ));

  return (
    <>
      {_todos.length > 0 ? <ul className="collection"> {_todos} </ul> : message}
    </>
  );
};

const mapState = ({ filterReducer: { filterType } }) => ({
  filterType
});

export default connect(mapState, null)(TodoList);
