import { GET_SEARCH } from "../constants/action-types";

export function addSearch(payload) {
    return { type: GET_SEARCH, payload }
};