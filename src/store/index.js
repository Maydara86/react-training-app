import { createStore, combineReducers } from 'redux'
import articlesReducer from './reducers/articlesReducer'
import usersReducer from './reducers/usersReducer'
import searchReducer from './reducers/searchReducer'
import usersData from '../data/users-data.json'
import articlesData from '../data/articles-data.json'

const initialStates = {
  articles: articlesData,
  users: usersData,
  searchTerm: '',
}

const allReducers = combineReducers({
  users: usersReducer,
  articles: articlesReducer,
  searchTerm: searchReducer,
})

const store = createStore(
  allReducers,
  initialStates,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store
