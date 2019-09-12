import { UPDATE_PERSON } from '../actions/personAction'

const personReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case UPDATE_PERSON:
      return { ...state, name: payload }

    default:
      return state
  }
}

export default personReducer
