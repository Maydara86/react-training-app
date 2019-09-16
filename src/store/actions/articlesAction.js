export const TOGGLE_BOOKMARK_ICON = 'TOGGLE_BOOKMARK_ICON'
export const TOGGLE_CLAP_ICON = 'TOGGLE_CLAP_ICON'

const clickBookmarkHandler = userId => {
  return { type: TOGGLE_BOOKMARK_ICON, payload: userId }
}

export const clickClapHandler = userId => {
  return { type: TOGGLE_CLAP_ICON, payload: userId }
}

export default clickBookmarkHandler
