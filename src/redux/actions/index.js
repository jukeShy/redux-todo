import {
  ADD_TODO,
  REMOVE_TODO,
  SET_TODO_DONE,
  FILTER_ALL,
  FILTER_BY_DONE
} from "./types";

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
});

export const removeTodo = todoId => ({
  type: REMOVE_TODO,
  payload: todoId
});

export const setTodoDone = todoId => ({
  type: SET_TODO_DONE,
  payload: todoId
});

export const filterAll = () => ({
  type: FILTER_ALL
});

export const filterByDone = () => ({
  type: FILTER_BY_DONE
});
