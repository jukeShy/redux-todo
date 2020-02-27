import React from "react";
import { connect } from "react-redux";

import { removeTodo, setTodoDone } from "../../redux/actions";

import { Button } from "../Button";

import "./TodoItem.css";

const TodoItem = ({ todo, removeTodo, setTodoDone }) => {
  return (
    <>
      <h5 className="todo-title">{todo.title}</h5>
      <div className="todo-actions">
        <Button
          className="btn blue"
          title="Done"
          onClick={() => setTodoDone(todo.id)}
        />
        <Button
          className="btn red"
          title="Remove"
          onClick={() => removeTodo(todo.id)}
        />
      </div>
    </>
  );
};

const mapDispatch = {
  removeTodo,
  setTodoDone
};

export default connect(null, mapDispatch)(TodoItem);
