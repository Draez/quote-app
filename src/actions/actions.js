/*
 * action types
 */

export const actionTypes = {
    UPDATE_COUNTER: "UPDATE_COUNTER",
};

/*
 * action creators
 */


export const updateCounter = (payload) => ({
    type: actionTypes.UPDATE_COUNTER,
    payload,
});