import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import App from './App'
import usersData from './data/__mocks__/users-data.json'
import articlesData from './data/__mocks__/articles-data.json'

const mockStore = configureStore([])

describe('My Connected React-Redux Component', () => {
  let store
  let component

  beforeEach(() => {
    store = mockStore({
      articles: articlesData,
      users: usersData,
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
