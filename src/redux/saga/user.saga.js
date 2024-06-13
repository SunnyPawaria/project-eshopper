import { put, takeLatest } from "redux-saga/effects";
import { addUserFirebase, deleteUserFirebase, getUserDatafirebase, updateUserFirebase } from "../service/user.service";
import { addUserError, deleteUserError, editUserError, getUserError, getUserStart, getUserSuccess } from "../action/user.action";
import { ADD_USER_START, DELETE_USER_START, EDIT_USER_START, GET_USER_START } from "../constant/user.constant";

function* getUser() {
    try {
        let data = yield getUserDatafirebase();
        yield put(getUserSuccess(data))
    } catch (error) {
        yield put(getUserError(error.message))
    }
}

function* addUser({payload}) {
    try {
        yield addUserFirebase(payload);
        yield put(getUserStart())
    } catch (error) {
        yield put(addUserError(error.message))
    }
}

function* editUser({payload}) {
    try {
        yield updateUserFirebase(payload);
        yield put(getUserStart())
    } catch (error) {
        yield put(editUserError(error.message))
    }
}

function* deleteUser({payload}) {
    try {
        yield deleteUserFirebase(payload);
        yield put(getUserStart())
    } catch (error) {
        yield put(deleteUserError(error.message))
    }
}

export function* user() {
    yield takeLatest(GET_USER_START, getUser);
    yield takeLatest(ADD_USER_START, addUser);
    yield takeLatest(EDIT_USER_START, editUser);
    yield takeLatest(DELETE_USER_START, deleteUser);
}