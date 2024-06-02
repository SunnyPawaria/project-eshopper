import {all, fork} from 'redux-saga/effects';
import { category } from './category.saga';
import { product } from './product.saga';

function* root() {
    return yield all([
        fork(category),
        fork(product)
    ])
}

export default root;