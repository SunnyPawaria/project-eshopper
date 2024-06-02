import { combineReducers } from "@reduxjs/toolkit";
import CategoryReducer from "./category.reducer";
import { reducer as toastrReducer } from "react-redux-toastr";
import ProductReducer from "./product.reducer";

const combineReducer = () => {
  return combineReducers({
    category: CategoryReducer,
    product: ProductReducer,
    toastr: toastrReducer,
  });
};

export default combineReducer;