import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { shallow } from './enzyme'
import App from './App'
import usersData from './data/__mocks__/users-data.json'
import articlesData from './data/__mocks__/articles-data.json'
import ArticleSummaryGridCard from './components/Article/ArticleGrid/ArticleSummaryGridCard'

const mockStore = configureStore([])

describe('My Connected React-Redux Component', () => {
  let store
  let component

  beforeEach(() => {
    store = mockStore({
      articles: articlesData,
      users: usersData,
      search: '',
    })

    store.dispatch = jest.fn()

    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})

// describe('Testing Search using renderer', () => {
//   // const wrapperOne = renderer.create()
//   let store
//   let component

//   store = mockStore({
//     articles: articlesData,
//     users: usersData,
//     search: 'magna',
//   })

//   store.dispatch = jest.fn()

//   component = renderer.create(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
//   console.log('Renderer#############', component.getInstance)
//   xit('should return secific `articles` matching the search', () => {
//     expect(component.root.props.articles).toEqual('5d66ae94c25c806ad478b2ab')
//   })
// })

// describe('Testing Search using shallow', () => {
//   let store
//   let component

//   store = mockStore({
//     articles: articlesData,
//     users: usersData,
//     search: 'magna',
//   })

//   store.dispatch = jest.fn()

//   const wrapper = shallow(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
//   console.log('Shallow###########', wrapper.instance().props())
// })
