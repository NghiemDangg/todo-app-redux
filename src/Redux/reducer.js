// import { combineReducers } from "redux";
import filtersReducer from "../components/Filters/FilterSlice";
import todoListReducer from "../components/TodoList/TodoSlice";
const rootReducer = (state = {}, action) => {
  return {
    filters: filtersReducer(state.filters, action),
    todoList: todoListReducer(state.todoList, action),
  };
};

export default rootReducer;
