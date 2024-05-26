import { put, takeLatest } from "redux-saga/effects";
import { ADD_CATEGORY_START } from "../constant/category.constant";
import { addCategoryError, addCategorySuccess } from "../action/category.action";

function* addCategory({payload}) {
    try {
        yield put(addCategorySuccess(payload))
    } catch (error) {
        yield put(addCategoryError(error.message))
    }
}

export function* category() {
    yield takeLatest(ADD_CATEGORY_START, addCategory);
}