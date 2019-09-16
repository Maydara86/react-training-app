import { TOGGLE_BOOKMARK_ICON } from '../actions/articlesAction'

const articlesReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case TOGGLE_BOOKMARK_ICON:
      return state.map(article => {
        if (article.id === payload) {
          article.bookmark = !article.bookmark
        }
        return article
      })

    default:
      return state
  }
}

export default articlesReducer
