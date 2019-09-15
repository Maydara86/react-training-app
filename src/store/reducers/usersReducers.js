import { TOGGLE_STAR_ICON } from '../actions/usersAction'

const usersReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case TOGGLE_STAR_ICON:
      return state.map(user => {
        if (user.id === payload) {
          user.isStarred = !user.isStarred
        }
        return user
      })

    default:
      return state
  }
}

export default usersReducer
