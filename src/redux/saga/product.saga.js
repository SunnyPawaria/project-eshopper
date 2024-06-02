import { put, takeLatest } from "redux-saga/effects";
import {
  addProductError,
  addProductSuccess,
  getProductError,
  getProductSuccess,
} from "../action/product.action";
import {
  addProductFirebase,
  getProductDatafirebase,
} from "../service/product.service";
import {
  ADD_PRODUCT_START,
  GET_PRODUCT_START,
} from "../constant/product.constant";

function* addProduct({ payload }) {
  try {
    yield addProductFirebase(payload);
    yield put(addProductSuccess(payload));
  } catch (error) {
    yield put(addProductError(error.message));
  }
}

function* getProduct() {
  try {
    let data = yield getProductDatafirebase();
    yield put(getProductSuccess(data));
  } catch (error) {
    yield put(getProductError(error.message));
  }
}

export function* product() {
  yield takeLatest(ADD_PRODUCT_START, addProduct);
  yield takeLatest(GET_PRODUCT_START, getProduct);
}
