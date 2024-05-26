import { put, takeLatest } from "redux-saga/effects";
import { ADD_CATEGORY_START, GET_CATEGORY_START } from "../constant/category.constant";
import { addCategoryError, addCategorySuccess, getCategoryError, getCategorySuccess } from "../action/category.action";
import { addCategoryFirebase, getCategoryDatafirebase } from "../service/category.service";

function* getCategory() {
    try {
        let result = yield getCategoryDatafirebase();
        yield put(getCategorySuccess(result))
        console.log(result);
    } catch (error) {
        yield put(getCategoryError(error.message))
    }
}

function* addCategory({payload}) {
    try {
        yield addCategoryFirebase(payload);
        yield put(addCategorySuccess(payload))
    } catch (error) {
        yield put(addCategoryError(error.message))
    }
}

export function* category() {
    yield takeLatest(GET_CATEGORY_START, getCategory);
    yield takeLatest(ADD_CATEGORY_START, addCategory);
}