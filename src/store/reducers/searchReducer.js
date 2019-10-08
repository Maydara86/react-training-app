import { ONCHANGE_SEARCH_INPUT } from '../actions/searchAction'

const searchReducer = (state = '', { type, payload }) => {
  if (type === ONCHANGE_SEARCH_INPUT) {
    return payload
  }
  return state
}

export default searchReducer
