import {all, fork} from 'redux-saga/effects';
import { category } from './category.saga';

function* root() {
    return yield all([
        fork(category)
    ])
}

export default root;