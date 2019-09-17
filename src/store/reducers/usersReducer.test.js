import { TOGGLE_STAR_ICON, CLICK_FOLLOW_BUTTON } from '../actions/usersAction'
import usersReducer from './usersReducer'

describe('Articles Reducer', () => {
  const initialState = [
    {
      id: '5d552d0058f193f2795fc814',
      isFollowed: false,
      isStarred: false,
      image: './assets/images/avata.png',
      readingTime: 20,
      name: 'Walton Morton',
      date: 'Aug 9',
    },
  ]

  describe('Default state tests', () => {
    it('Should return default state', () => {
      const newState = usersReducer(undefined, {})
      expect(newState).toEqual({})
    })

    it('Should return default state when receiving `TOGGLE_STAR_ICON`', () => {
      const newState = usersReducer(initialState, {
        type: TOGGLE_STAR_ICON,
        payload: '',
      })
      expect(newState).toEqual(initialState)
    })

    it('Should return default state when receiving `CLICK_FOLLOW_BUTTON`', () => {
      const newState = usersReducer(initialState, {
        type: CLICK_FOLLOW_BUTTON,
        payload: '',
      })
      expect(newState).toEqual(initialState)
    })
  })

  describe('New state tests', () => {
    it('Should return a new state when receiving `TOGGLE_STAR_ICON`', () => {
      const newState = usersReducer(initialState, {
        type: TOGGLE_STAR_ICON,
        payload: '5d552d0058f193f2795fc814',
      })
      expect(newState[0].isStarred).toBeTruthy()
    })

    it('Should return a new state when receiving `CLICK_FOLLOW_BUTTON`', () => {
      const newState = usersReducer(initialState, {
        type: CLICK_FOLLOW_BUTTON,
        payload: '5d552d0058f193f2795fc814',
      })
      expect(newState[0].isFollowed).toBeTruthy()
    })
  })
})
