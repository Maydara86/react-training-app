import clickStarHandler, {
  TOGGLE_STAR_ICON,
  CLICK_FOLLOW_BUTTON,
  clickFollowHandler,
} from './usersAction'

describe('Users actions', () => {
  it('Should return `clickStarHandler` action', () => {
    const expectedAction = {
      type: TOGGLE_STAR_ICON,
      payload: '',
    }
    expect(clickStarHandler('')).toEqual(expectedAction)
  })

  it('Should return `clickFollowHandler` action', () => {
    const expectedAction = {
      type: CLICK_FOLLOW_BUTTON,
      payload: '',
    }
    expect(clickFollowHandler('')).toEqual(expectedAction)
  })
})
