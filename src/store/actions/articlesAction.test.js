import clickBookmarkHandler, {
  clickClapHandler,
  TOGGLE_BOOKMARK_ICON,
  TOGGLE_CLAP_ICON,
} from './articlesAction'

describe('Articles actions', () => {
  it('Should return `clickBookmarkHandler` action', () => {
    const expectedAction = {
      type: TOGGLE_BOOKMARK_ICON,
      payload: '',
    }
    expect(clickBookmarkHandler('')).toEqual(expectedAction)
  })

  it('Should return `clickClapHandler` action', () => {
    const expectedAction = {
      type: TOGGLE_CLAP_ICON,
      payload: '',
    }
    expect(clickClapHandler('')).toEqual(expectedAction)
  })
})
