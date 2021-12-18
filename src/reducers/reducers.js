import { actionTypes } from '../actions/actions';
const initialState = { inputCount: 1, quotes: [], filteredQuotes: [] };

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_QUOTE_ON_BUTTON_CLICK:
            const newFilteredQuotes = [action.payload, ...state.quotes].filter(quote => quote.match(/(\w+)/g).length >= state?.inputCount);
            return {
                ...state.quotes,
                quotes: [action.payload, ...state.quotes],
                inputCount: state.inputCount,
                filteredQuotes: newFilteredQuotes,
            };

        case actionTypes.DELETE_QUOTE_ON_BUTTON_CLICK:
            const quotes = state?.quotes;
            const newQuotes = quotes.filter(quote => quote !== action.payload);
            const resetFilteredQuotes = newQuotes.filter(quote => quote.match(/(\w+)/g).length >= state?.inputCount);

            return {
                ...state.quotes,
                quotes: newQuotes,
                inputCount: state.inputCount,
                filteredQuotes: resetFilteredQuotes,
            };

        case actionTypes.UPDATE_WORD_COUNT_ON_INPUT_CHANGE:
            const inputCount = action.payload;
            const filteredQuotes = state?.quotes.filter(quote => quote.split(' ').length >= inputCount);
            return {
                ...state,
                inputCount: action.payload,
                filteredQuotes,
            };

        
        case actionTypes.DELETE_ALL_QUOTES_ON_CLICK:
            return {
                ...state,
                inputCount: action.payload,
                quotes: [],
                filteredQuotes: [],
            };
        default:
            return state;
    }
};

export default reducer;
