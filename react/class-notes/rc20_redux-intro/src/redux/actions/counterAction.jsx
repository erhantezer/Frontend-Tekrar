//! rxaction

import { DECREMENT, INCREMENT, RESET } from "../types/counterType";

export const increment = (payload) => ({
  type: INCREMENT,
  payload
});

export const decrement = (payload) => ({
  type: DECREMENT,
  payload
});

export const reset = (payload) => ({
  type: RESET,
  payload
})

