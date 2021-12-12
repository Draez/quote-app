/*
 * action types
 */

export const actionTypes = {
    UPDATE_COUNTER: "UPDATE_COUNTER",
    FETCHING_QUOTE_ON_BUTTON_CLICK: "FETCHING_QUOTE_ON_BUTTON_CLICK",
    FETCH_QUOTE_ON_BUTTON_CLICK: "FETCH_QUOTE_ON_BUTTON_CLICK",
    LOADING_QUOTE: "LOADING_QUOTE",
    DELETE_QUOTE_ON_BUTTON_CLICK: "DELETE_QUOTE_ON_BUTTON_CLICK",
    UPDATE_WORD_COUNT_ON_INPUT_CHANGE: "UPDATE_WORD_COUNT_ON_INPUT_CHANGE",
};

/*
 * action creators
 */


export const updateCounter = (payload) => ({
    type: actionTypes.UPDATE_COUNTER,
    payload,
});

export const fetchingQuote = () => ({
    type: actionTypes.FETCHING_QUOTE_ON_BUTTON_CLICK,
});

export const fetchQuote = (payload) => ({
    type: actionTypes.FETCH_QUOTE_ON_BUTTON_CLICK,
    payload,
});

export const loadingQuote = (payload) => ({
    type: actionTypes.LOADING_QUOTE,
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
