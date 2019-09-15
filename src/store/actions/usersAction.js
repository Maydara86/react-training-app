export const TOGGLE_STAR_ICON = 'TOGGLE_STAR_ICON'

const clickStarHandler = userId => {
  return { type: TOGGLE_STAR_ICON, payload: userId }
}

export default clickStarHandler
