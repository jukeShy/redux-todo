import { ADD_TODO, REMOVE_TODO, SET_TODO_DONE } from "../actions/types";

const initialState = {
  todos: [
    {
      id: 0,
      title: "Hello Todo",
      isDone: false
    },
    {
      id: 1,
      title: "Hello Todo 1",
      isDone: false
    },
    {
      id: 2,
      title: "Hello Todo 2",
      isDone: true
    }
  ]
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      const todos = [...state.todos, payload];

      return { ...state.todos, todos };
    case REMOVE_TODO:
      const filtered = state.todos.filter(todo => todo.id !== payload);

      return { ...state.todos, todos: filtered };
    case SET_TODO_DONE:
      const toggled = state.todos.map(todo =>
        todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
      );

      return { ...state.todos, todos: toggled };

    default:
      return state;
  }
};

export { todoReducer };
