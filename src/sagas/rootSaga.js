/**
 * saga.
 */
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import {
    actionTypes, fetchQuote, loadingQuote,
} from '../actions/actions';

function* updateCounter() {
    console.log("test");
}

/*
    Fetch new oneliner quote
*/
function* fetchingQuoteSaga() {
    const response = yield axios.get(`https://api.kanye.rest/`).catch((err) => {
        console.log("Err ", err);
    });
    const { quote } = response.data;
    yield put(fetchQuote(quote));
}

export default function* rootSaga() {
    yield takeEvery(actionTypes.UPDATE_COUNTER, updateCounter);
    yield takeEvery(actionTypes.FETCHING_QUOTE_ON_BUTTON_CLICK, fetchingQuoteSaga);
}