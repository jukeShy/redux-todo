import React from "react";
import { connect } from "react-redux";

import Filter from "./Filter";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

import "./App.css";

const App = ({ todos, filterType }) => {
  return (
    <div id="webapp">
      <div className="container">
        <TodoAdd />
        <Filter />
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

const mapState = ({
  todoReducer: { todos },
  filterReducer: { filterType }
}) => ({
  todos,
  filterType
});

export default connect(mapState, null)(App);
