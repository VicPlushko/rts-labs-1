import { GET_SEARCH } from "../constants/action-types";

const initialState = {
    searchTerms: ""
};

function rootReducer(state = initialState, action) {
    if (action.type === GET_SEARCH) {
        // state.userSearch.push(action.payload);
        return Object.assign({}, state, {
            searchTerms: state.searchTerms.concat(action.payload)
        });
    }
    return state;
};

export default rootReducer;