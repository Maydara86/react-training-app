import { TOGGLE_BOOKMARK_ICON, TOGGLE_CLAP_ICON } from '../actions/articlesAction'
import articlesReducer from './articlesReducer'

describe('Articles Reducer', () => {
  const initialState = [
    {
      id: '5d66ae94690d3b1732e825ac',
      articleName: 'amet aliqua cupidatat dolore Lorem elit voluptate proident tempor incididunt',
      claps: 46,
      bookmark: false,
      articleImage: 'http://placehold.it/32x32',
      didClap: false,
      content: 'nisi excepteur eiusmod Lorem id in nisi tempor ex anim',
      responses: 3,
    },
  ]

  describe('Default state tests', () => {
    it('Should return default state', () => {
      const newState = articlesReducer(undefined, {})
      expect(newState).toEqual({})
    })

    it('Should return default state when receiving `TOGGLE_BOOKMARK_ICON`', () => {
      const newState = articlesReducer(initialState, {
        type: TOGGLE_BOOKMARK_ICON,
        payload: '',
      })
      expect(newState).toEqual(initialState)
    })

    it('Should return default state when receiving `TOGGLE_CLAP_ICON`', () => {
      const newState = articlesReducer(initialState, {
        type: TOGGLE_CLAP_ICON,
        payload: '',
      })
      expect(newState).toEqual(initialState)
    })
  })

  describe('New state tests', () => {
    it('Should return a new state when receiving `TOGGLE_BOOKMARK_ICON`', () => {
      const newState = articlesReducer(initialState, {
        type: TOGGLE_BOOKMARK_ICON,
        payload: '5d66ae94690d3b1732e825ac',
      })
      expect(newState[0].bookmark).toBeTruthy()
    })

    it('Should return a new state when receiving `TOGGLE_CLAP_ICON`', () => {
      const newState = articlesReducer(initialState, {
        type: TOGGLE_CLAP_ICON,
        payload: '5d66ae94690d3b1732e825ac',
      })
      expect(newState[0].didClap).toBeTruthy()
      expect(newState[0].claps).toEqual(47)
    })
  })
})
