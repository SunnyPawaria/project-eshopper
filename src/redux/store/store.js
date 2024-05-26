import { configureStore } from "@reduxjs/toolkit";
import combineReducer from "../reducer/combine.reducer";
import createSagaMiddleware from 'redux-saga';
import root from "../saga/root.saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: combineReducer(), 
    // middleware:[sagaMiddleware],
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
    devTools: true
})

sagaMiddleware.run(root);

export default store;