import { createSelector } from 'reselect'

const searchSelector = state => state.search

const getSearch = search => search

export default createSelector(
  searchSelector, // pick off a piece of state or the whole state
  getSearch // last argument is the function that has our select logic
)
