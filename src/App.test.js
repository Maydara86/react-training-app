import React from 'react'
import { shallow } from './enzyme'
import App from './App'

jest.mock('./data/users-data.json')
const { users } = require('./data/users-data.json')

const AppComponent = shallow(<App />)
const wrapper = AppComponent.instance()

describe('App Component', () => {
  it('testing clickFollowHandler method to have the expected effect on the state of the first user', () => {
    wrapper.clickFollowHandler('5d552d0058f193f2795fc814')
    expect(wrapper.state.users[0].isFollowed).toBeFalsy()
  })

  it('clickFollowHandler method have the expected effect on the state of the second user', () => {
    wrapper.clickFollowHandler('5d552d00b20b141dff10d2a2')
    expect(wrapper.state.users[1].isFollowed).toBeFalsy()
  })

  it('Testing clickStarHandler method to have the expected effect on the state of the first user', () => {
    wrapper.clickStarHandler('5d552d0058f193f2795fc814')
    expect(wrapper.state.users[0].isStarred).toBeFalsy()
  })

  it('calling the clickStarHandler method has the expected effect on the state of the second user', () => {
    wrapper.clickStarHandler('5d552d00b20b141dff10d2a2')
    expect(wrapper.state.users[1].isStarred).toBeFalsy()
  })

  it('checks the clickClapHandler method', () => {
    wrapper.clickClapHandler('5d66ae9445543ffea5167d5e')
    expect(wrapper.state.articles[1].claps).toEqual(71)
    expect(wrapper.state.articles[1].didClap).toBeTruthy()
  })

  it('checks the clickBookmarkHandler method', () => {
    wrapper.clickBookmarkHandler('5d66ae9445543ffea5167d5e')
    expect(wrapper.state.articles[1].bookmark).toBeTruthy()
  })
})
