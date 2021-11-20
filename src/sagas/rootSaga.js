/**
 * saga.
 */
import { takeEvery } from 'redux-saga/effects';
import {
    actionTypes,
} from '../actions/actions';

function* updateCounter() {
    console.log("test");
}

export default function* rootSaga() {
    yield takeEvery(actionTypes.UPDATE_COUNTER, updateCounter);
}
