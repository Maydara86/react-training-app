export const UPDATE_PERSON = 'UPDATE_USERS'

const updateUsers = updatedUsers => {
  return { type: UPDATE_PERSON, payload: updatedUsers }
}

export default updateUsers
