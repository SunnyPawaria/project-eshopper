import { combineReducers } from "@reduxjs/toolkit";
import CategoryReducer from "./category.reducer";
import { reducer as toastrReducer } from "react-redux-toastr";
import ProductReducer from "./product.reducer";
import CartReducer from "./cart.reducer";
import UserReducer from "./user.reducer";
import OrderReducer from "./order.reducer";

const combineReducer = () => {
  return combineReducers({
    category: CategoryReducer,
    product: ProductReducer,
    toastr: toastrReducer,
    cart: CartReducer,
    user:UserReducer,
    order:OrderReducer
  });
};

export default combineReducer;
