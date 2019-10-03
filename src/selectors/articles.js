import { createSelector } from 'reselect'

const getArticlesFromState = state => state.articles
const getSearchFromState = state => state.searchTerm

const getArticles = (articles, searchTerm) => {
  searchTerm.trim().toLowerCase()
  if (searchTerm.length > 0) {
    articles = articles.filter(article => {
      return (
        article.articleName.toLowerCase().match(searchTerm) ||
        article.content.toLowerCase().match(searchTerm)
      )
    })
  }
  return articles
}

export default createSelector(
  getArticlesFromState, // pick off a piece of state or the whole state
  getSearchFromState,
  getArticles // last argument is the function that has our select logic
)
