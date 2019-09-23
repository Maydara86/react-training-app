import { TOGGLE_BOOKMARK_ICON, TOGGLE_CLAP_ICON } from '../actions/articlesAction'

const articlesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case TOGGLE_BOOKMARK_ICON:
      return state.map(article =>
        article.id === payload ? { ...article, bookmark: !article.bookmark } : article
      )

    case TOGGLE_CLAP_ICON:
      return state.map(article =>
        article.id === payload ? { ...article, didClap: true, claps: article.claps + 1 } : article
      )

    default:
      return state
  }
}

export default articlesReducer
