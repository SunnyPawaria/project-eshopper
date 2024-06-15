import { put, takeLatest } from "redux-saga/effects";
import { GET_ORDER_START, PLACE_ORDER_START } from "../constant/order.constant";
import { getOrderError, getOrderStart, getOrderSuccess, placeOrderError } from "../action/order.action";
import { getOrderDatafirebase, placeOrderFirebase } from "../service/order.service";

function* getOrder() {
    try {
        let data = yield getOrderDatafirebase();
        yield put(getOrderSuccess(data))
    } catch (error) {
        yield put(getOrderError(error.message))
    }
}

function* placeOrder({payload}) {
    try {
        yield placeOrderFirebase(payload);
        yield put(getOrderStart())
    } catch (error) {
        yield put(placeOrderError(error.message))
    }
}

export function* order() {
    yield takeLatest(GET_ORDER_START, getOrder);
    yield takeLatest(PLACE_ORDER_START, placeOrder);
}