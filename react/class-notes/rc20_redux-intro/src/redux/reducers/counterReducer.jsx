import { DECREMENT, INCREMENT, RESET } from "../types/counterType"

const initialState = {
    counter:0
}

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case INCREMENT:
    return { counter: state.counter + 1 }
  case DECREMENT:
    return { counter: state.counter - 1 }
  case RESET:
    return initialState
  default:
    return state
  }
}
export default counterReducer