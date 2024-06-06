import { put, takeLatest } from "redux-saga/effects";
import { ADD_CART_START, EDIT_CART_START } from "../constant/cart.constant";
import { addCartFirebase, updateCartFirebase } from "../service/cart.service";
import {
  addCartError,
  addCartSuccess,
  updateCartError,
  updateCartSuccess,
} from "../action/cart.action";

function* addCart({ payload }) {
  console.log("Fasfd");
  try {
    let data = yield addCartFirebase(payload);
    yield put(addCartSuccess(data));
  } catch (error) {
    yield put(addCartError(error.message));
  }
}

function* editCart({ payload }) {
  try {
    yield updateCartFirebase(payload);
    yield put(updateCartSuccess(payload));
  } catch (error) {
    yield put(updateCartError(error.message));
  }
}

export function* cart() {
  yield takeLatest(ADD_CART_START, addCart);
  yield takeLatest(EDIT_CART_START, editCart);
}
