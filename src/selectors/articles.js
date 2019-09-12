import { createSelector } from 'reselect'

const articlesSelector = state => state.articles

const getArticles = articles => articles

export default createSelector(
  articlesSelector, // pick off a piece of state or the whole state
  getArticles // last argument is the function that has our select logic
)
