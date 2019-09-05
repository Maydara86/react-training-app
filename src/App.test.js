import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from './enzyme'
import App from './App'

jest.mock('./data/users-data.json')

const AppComponent = shallow(<App />)
const wrapper = AppComponent.instance()

describe('App Component', () => {
  describe('App Snapshots', () => {
    it('renders correctly when the `state` is empty', () => {
      expect(AppComponent).toMatchSnapshot()
    })

    it('renders correctly when there is `state`', () => {
      const tree = renderer.create(<App />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  it('testing clickFollowHandler method to have the expected effect on the state of the first user', () => {
    wrapper.clickFollowHandler('5d552d0058f193f2795fc814')
    expect(wrapper.state.users[0].isFollowed).toBeFalsy()
  })

  it('clickFollowHandler method have the expected effect on the state of the second user', () => {
    wrapper.clickFollowHandler('5d552d00b20b141dff10d2a2')
    expect(wrapper.state.users[1].isFollowed).toBeTruthy()
  })

  it('clickStarHandler method to have the expected effect on the state of the first user', () => {
    wrapper.clickStarHandler('5d552d0058f193f2795fc814')
    expect(wrapper.state.users[0].isStarred).toBeTruthy()
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
