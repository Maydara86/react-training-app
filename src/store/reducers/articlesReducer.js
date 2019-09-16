import { TOGGLE_BOOKMARK_ICON, TOGGLE_CLAP_ICON } from '../actions/articlesAction'

const articlesReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case TOGGLE_BOOKMARK_ICON:
      return state.map(article => {
        if (article.id === payload) {
          article.bookmark = !article.bookmark
        }
        return article
      })

    case TOGGLE_CLAP_ICON:
      return state.map(article => {
        if (article.id === payload) {
          article.didClap = true
          article.claps += 1
        }
        return article
      })

    default:
      return state
  }
}

export default articlesReducer
