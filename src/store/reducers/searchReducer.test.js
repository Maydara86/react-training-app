import { ONCHANGE_SEARCH_INPUT } from '../actions/searchAction'
import searchReducer from './searchReducer'

describe('Search Reducer', () => {
  const initialState = { search: '' }

  describe('Default state tests', () => {
    it('Should return default state', () => {
      const newState = searchReducer(undefined, '')
      expect(newState).toEqual('')
    })

    it('Should return new state when receiving `ONCHANGE_SEARCH_INPUT`', () => {
      const newState = searchReducer(initialState, {
        type: ONCHANGE_SEARCH_INPUT,
        payload: 'something',
      })
      expect(newState).toEqual('something')
    })
  })
})
