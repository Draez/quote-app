import { actionTypes } from '../actions/actions';
const initialState = { count: 0 };

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_COUNTER:
            return {
                ...state.count,
                count: state.count + 1,
            };

        default:
            return state;
    }
};

export default reducer;
