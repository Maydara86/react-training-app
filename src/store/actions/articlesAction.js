export const TOGGLE_BOOKMARK_ICON = 'TOGGLE_BOOKMARK_ICON'

const clickBookmarkHandler = userId => {
  return { type: TOGGLE_BOOKMARK_ICON, payload: userId }
}

export default clickBookmarkHandler
