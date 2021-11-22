import { actionTypes } from '../actions/actions';
const initialState = { count: 0, quotes: [], quoteLoading: false };

// STATE
// quotes []

// ACTIONS
// fetchQuote -> fetch all quote and set it to ( quotes [] )
// deleteQuote -> delete single quote (ID) from ( quotes [] )
// deleteQuotes -> delete all quotes from ( quotes [] )

// SELECTORS
// totalQuoteCount = quotes[] amount

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_COUNTER:
            return {
                ...state.count,
                count: state.count + 1,
            };
        case actionTypes.FETCH_QUOTE_ON_BUTTON_CLICK:
            return {
                ...state.quotes,
                quotes: [action.payload, ...state.quotes],
            };

        case actionTypes.LOADING_QUOTE:
            return {
                ...state.quoteLoading,
                quoteLoading: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
