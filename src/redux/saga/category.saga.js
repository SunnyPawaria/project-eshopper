import { put, takeLatest } from "redux-saga/effects";
import { ADD_CATEGORY_START, DELETE_CATEGORY_START, EDIT_CATEGORY_START, GET_CATEGORY_START } from "../constant/category.constant";
import { addCategoryError, addCategorySuccess, editCategoryError, getCategoryError, getCategoryStart, getCategorySuccess } from "../action/category.action";
import { addCategoryFirebase, deleteCategoryFirebase, getCategoryDatafirebase, updateCategoryFirebase } from "../service/category.service";

function* getCategory() {
    try {
        let result = yield getCategoryDatafirebase();
        yield put(getCategorySuccess(result))
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

function* editCategory({payload}) {
    try {
        yield updateCategoryFirebase(payload.data, payload.id);
        yield put(getCategoryStart())
    } catch (error) {
        yield put(editCategoryError(error.message))
    }
}

function* deleteCategory({payload}) {
    try {
        yield deleteCategoryFirebase(payload);
        yield put(getCategoryStart())
    } catch (error) {
        yield put(editCategoryError(error.message))
    }
}

export function* category() {
    yield takeLatest(GET_CATEGORY_START, getCategory);
    yield takeLatest(ADD_CATEGORY_START, addCategory);
    yield takeLatest(EDIT_CATEGORY_START, editCategory);
    yield takeLatest(DELETE_CATEGORY_START, deleteCategory);
}