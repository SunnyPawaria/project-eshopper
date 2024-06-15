import { all, fork } from "redux-saga/effects";
import { category } from "./category.saga";
import { product } from "./product.saga";
import { cart } from "./cart.saga";
import { user } from "./user.saga";
import { order } from "./order.saga";

function* root() {
  return yield all([
    fork(category),
    fork(product),
    fork(cart),
    fork(user),
    fork(order)]);
}

export default root;
