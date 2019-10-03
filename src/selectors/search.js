import { createSelector } from 'reselect'

const getSearchFromState = state => state.searchTerm

const getSearch = searchTerm => searchTerm

export default createSelector(
  getSearchFromState, // pick off a piece of state or the whole state
  getSearch // last argument is the function that has our select logic
)
