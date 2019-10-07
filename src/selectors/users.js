import { createSelector } from 'reselect'

const getUsersFromState = state => state.users

const getUsers = users => users

export default createSelector(
  getUsersFromState, // pick off a piece of state or the whole state
  getUsers // last argument is the function that has our select logic
)
