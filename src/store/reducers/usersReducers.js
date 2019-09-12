import { UPDATE_PERSON } from '../actions/usersAction'

const usersReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case UPDATE_PERSON:
      return { ...state, name: payload }

    default:
      return state
  }
}

export default usersReducer
