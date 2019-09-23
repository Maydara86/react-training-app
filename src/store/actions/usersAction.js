export const TOGGLE_STAR_ICON = 'TOGGLE_STAR_ICON'
export const CLICK_FOLLOW_BUTTON = 'CLICK_FOLLOW_BUTTON'

const clickStarHandler = userId => {
  return { type: TOGGLE_STAR_ICON, payload: userId }
}

export const clickFollowHandler = userId => {
  return { type: CLICK_FOLLOW_BUTTON, payload: userId }
}

export default clickStarHandler
