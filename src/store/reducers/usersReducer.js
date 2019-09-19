import { TOGGLE_STAR_ICON, CLICK_FOLLOW_BUTTON } from '../actions/usersAction'

const usersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case TOGGLE_STAR_ICON:
      return state.map(user => {
        if (user.id === payload) {
          user.isStarred = !user.isStarred
        }
        return user
      })

    case CLICK_FOLLOW_BUTTON:
      return state.map(user => {
        if (user.id === payload) {
          user.isFollowed = !user.isFollowed
        }
        return user
      })

    default:
      return state
  }
}

export default usersReducer
