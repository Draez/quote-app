/*
 * action types
 */

export const actionTypes = {
    UPDATE_COUNTER: "UPDATE_COUNTER",
    FETCHING_QUOTE_ON_BUTTON_CLICK: "FETCHING_QUOTE_ON_BUTTON_CLICK",
    FETCH_QUOTE_ON_BUTTON_CLICK: "FETCH_QUOTE_ON_BUTTON_CLICK",
    LOADING_QUOTE: "LOADING_QUOTE",
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