import { actionTypes } from '../actions/actions';
const initialState = { inputCount: 1, quotes: [], filteredQuotes: [], quoteLoading: false, };

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
        case actionTypes.FETCH_QUOTE_ON_BUTTON_CLICK:
            return {
                ...state.quotes,
                quotes: [action.payload, ...state.quotes],
            };

        case actionTypes.LOADING_QUOTE:
            return {
                ...state,
                quoteLoading: action.payload,
            };
        case actionTypes.DELETE_QUOTE_ON_BUTTON_CLICK:
            const quotes = state?.quotes;
            const newQuotes = quotes.filter(quote => quote !== action.payload);

            return {
                ...state.quotes,
                quotes: newQuotes,
            };

        case actionTypes.UPDATE_WORD_COUNT_ON_INPUT_CHANGE:
            const filteredQuotes = state?.quotes.filter(quote => quote.match(/(\w+)/g).length >= action.payload);

            return {
                ...state,
                inputCount: action.payload,
                filteredQuotes,
            };
        default:
            return state;
    }
};

export default reducer;
