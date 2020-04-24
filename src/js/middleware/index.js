// import { ADD_SEARCH } from "../constants/action-types";

export function middleware({ dispatch }) {
    return (next) => {
        return (action) => {
            // Add something if you need to intercept an action
            
            return next(action);
        }
    }
}

export default middleware;