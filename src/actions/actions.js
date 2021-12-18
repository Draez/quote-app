/*
 * action types
 */

export const actionTypes = {
    FETCHING_QUOTE_ON_BUTTON_CLICK: "FETCHING_QUOTE_ON_BUTTON_CLICK",
    FETCH_QUOTE_ON_BUTTON_CLICK: "FETCH_QUOTE_ON_BUTTON_CLICK",
    DELETE_QUOTE_ON_BUTTON_CLICK: "DELETE_QUOTE_ON_BUTTON_CLICK",
    UPDATE_WORD_COUNT_ON_INPUT_CHANGE: "UPDATE_WORD_COUNT_ON_INPUT_CHANGE",
    DELETE_ALL_QUOTES_ON_CLICK: "DELETE_ALL_QUOTES_ON_CLICK",
};

/*
 * action creators
 */

export const fetchingQuote = () => ({
    type: actionTypes.FETCHING_QUOTE_ON_BUTTON_CLICK,
});

export const fetchQuote = (payload) => ({
    type: actionTypes.FETCH_QUOTE_ON_BUTTON_CLICK,
    payload,
});

export const deleteQuote = (payload) => ({
    type: actionTypes.DELETE_QUOTE_ON_BUTTON_CLICK,
    payload
});

export const updateWordCount = (payload) => ({
    type: actionTypes.UPDATE_WORD_COUNT_ON_INPUT_CHANGE,
    payload
});

export const deleteQuotes = () => ({
    type: actionTypes.DELETE_ALL_QUOTES_ON_CLICK,
});