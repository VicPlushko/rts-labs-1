import { ADD_SEARCH } from "../constants/action-types";

export function addSearch(payload) {
    return { type: ADD_SEARCH, payload }
};