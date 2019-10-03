import articlesSelector from './articles'
import mockedArticles from '../data/__mocks__/articles-data.json'

describe('articlesSelector', () => {
  it('should return all the `articles` when `searchTerm` is empty', () => {
    const mockState = {
      articles: mockedArticles,
      searchTerm: '',
    }
    const selectedArticles = articlesSelector.resultFunc(mockState.articles, mockState.searchTerm)
    expect(selectedArticles.length).toEqual(3)
  })

  it("should return `articles` that matches `searchTerm` of the article's title", () => {
    const mockState = {
      articles: mockedArticles,
      searchTerm: 'magna',
    }
    const selectedArticles = articlesSelector.resultFunc(mockState.articles, mockState.searchTerm)
    expect(selectedArticles[0].id).toEqual('5d66ae94c25c806ad478b2ab')
  })

  it("should return `articles` that matches `searchTerm` of the article's content", () => {
    const mockState = {
      articles: mockedArticles,
      searchTerm: '10',
    }
    const selectedArticles = articlesSelector.resultFunc(mockState.articles, mockState.searchTerm)
    expect(selectedArticles[0].id).toEqual('5d66ae94a1b34ddf6249668b')
  })
})
