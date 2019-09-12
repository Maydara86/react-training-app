import { UPDATE_GAME } from '../actions/articlesAction'

const articlesReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case UPDATE_GAME:
      return { name: payload }

    default:
      return state
  }
}

export default articlesReducer
