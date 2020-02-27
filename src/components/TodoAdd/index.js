import React, { useState } from "react";
import { connect } from "react-redux";
import uuid from "uuid/v1";

import { addTodo } from "../../redux/actions/index";

import { Todo } from "../../redux/models/Todo";

import "./TodoAdd.css";

const TodoAdd = ({ addTodo }) => {
  const [todo, setTodo] = useState({ ...Todo });

  const onChangeHandler = e => setTodo({ ...todo, title: e.target.value });

  const onSubmitHandler = e => {
    e.preventDefault();

    if (!todo.title) return;

    addTodo({ ...todo, id: uuid(), title: todo.title.trim() });
    setTodo({ ...todo, title: "" });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="input-field">
        <input
          value={todo.title}
          onChange={onChangeHandler}
          placeholder="e.g. Make some stuff"
          type="text"
          className="validate"
        />
        <label htmlFor="first_name" className="active">
          Todo name
        </label>
      </div>
    </form>
  );
};

const mapDispatch = {
  addTodo
};

export default connect(null, mapDispatch)(TodoAdd);
