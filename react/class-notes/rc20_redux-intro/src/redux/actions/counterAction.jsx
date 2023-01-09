//! rxaction

import { DECREMENT, INCREMENT, RESET } from "../types/counterType";

export const increment = (payload) => {
    return { type: INCREMENT,payload}
};

export const decrement = (payload) => {
    return {  type: DECREMENT, payload}
};

export const reset = (payload) => {
    return {  type: RESET, payload}
}

