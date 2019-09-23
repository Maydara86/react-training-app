import { createSelector } from 'reselect'

const usersSelector = state => state.users

const getUsers = users => users

export default createSelector(
  usersSelector, // pick off a piece of state or the whole state
  getUsers // last argument is the function that has our select logic
)
