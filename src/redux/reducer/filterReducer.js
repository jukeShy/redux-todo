import { FILTER_ALL, FILTER_BY_DONE } from "../actions/types";

const initialState = {
  filterType: "all"
};

const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_ALL:
      return { ...state.filterType, filterType: "all" };
    case FILTER_BY_DONE:
      return { ...state.filterType, filterType: "by done" };
    default:
      return state;
  }
};

export { filterReducer };
