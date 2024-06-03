import { put, takeLatest } from "redux-saga/effects";
import {
  addProductError,
  addProductSuccess,
  editProductError,
  editProductSuccess,
  getProductError,
  getProductStart,
  getProductSuccess,
} from "../action/product.action";
import {
  addProductFirebase,
  deleteProductFirebase,
  getProductDatafirebase,
  updateProductFirebase,
} from "../service/product.service";
import {
  ADD_PRODUCT_START,
  DELETE_PRODUCT_START,
  EDIT_PRODUCT_START,
  GET_PRODUCT_START,
} from "../constant/product.constant";

function* addProduct({ payload }) {
  try {
    yield addProductFirebase(payload);
    yield put(getProductStart());
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
function* editProduct({payload}) {
  try {
    yield updateProductFirebase(payload.data, payload.id);
    yield put(getProductStart());
  } catch (error) {
    yield put(editProductError(error.message));
  }
}

function* deleteProduct({payload}) {
  try {
    yield deleteProductFirebase(payload);
    yield put(getProductStart());
  } catch (error) {
    yield put(editProductError(error.message));
  }
}

export function* product() {
  yield takeLatest(ADD_PRODUCT_START, addProduct);
  yield takeLatest(GET_PRODUCT_START, getProduct);
  yield takeLatest(EDIT_PRODUCT_START, editProduct);
  yield takeLatest(DELETE_PRODUCT_START, deleteProduct);
}
