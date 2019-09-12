import { createStore, combineReducers } from 'redux'
import gameReducer from './reducers/gameReducer'
import personReducer from './reducers/personReducers'

const initialStates = {
  game: { name: 'Doom' },
  person: { name: 'Momo', email: 'Mimi@aol.com' },
}

const allReducers = combineReducers({
  person: personReducer,
  game: gameReducer,
})

const store = createStore(
  allReducers,
  initialStates,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store
