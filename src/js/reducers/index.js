import { ADD_SEARCH } from "../constants/action-types";

const initialState = {
    userSearch: ""
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_SEARCH) {
        // state.userSearch.push(action.payload);
        return Object.assign({}, state, {
            userSearch: state.userSearch.concat(action.payload)
        });
    }
    return state;
};

export default rootReducer;