import changeSearchHandler, { ONCHANGE_SEARCH_INPUT } from './searchAction'

describe('Search actions', () => {
  it('Should return `changeSearchHandler` action', () => {
    const expectedAction = {
      type: ONCHANGE_SEARCH_INPUT,
      payload: 'something',
    }
    expect(changeSearchHandler({ target: { value: 'something' } })).toEqual(expectedAction)
  })
})
