import { UPDATE_PERSON } from '../actions/usersAction'

const usersReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case UPDATE_PERSON:
      return payload

    default:
      return state
  }
}

export default usersReducer
