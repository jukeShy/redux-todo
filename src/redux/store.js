import { createStore, combineReducers } from "redux";

import { todoReducer } from "./reducer/todoReducer";
import { filterReducer } from "./reducer/filterReducer";

const rootReducer = combineReducers({ todoReducer, filterReducer });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
