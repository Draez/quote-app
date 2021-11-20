import { all, call, spawn } from 'redux-saga/effects';
import root from './rootSaga';

/**
 * This strategy maps our child sagas to spawned generators (detaching them
 * from the root parent) which start our sagas as subtasks in a try block.
 * Our saga will run until termination, and then be automatically restarted.
 * The catch block harmlessly handles any error that may have been thrown by,
 * and terminated, our saga.
 *
 * @name rootSaga
 * @see https://redux-saga.js.org/docs/advanced/RootSaga.html
 * @function
 */
export default function* rootSaga() {
    const sagas = [root];

    yield all(
        sagas.map((saga) =>
            spawn(function* () {
                while (true) {
                    try {
                        yield call(saga);
                        break;
                    } catch (e) {
                        console.log(e);
                    }
                }
            })
        )
    );
}
