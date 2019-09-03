import React from 'react';
import {shallow} from './enzyme';
import renderer from 'react-test-renderer'
import App from './App';

jest.mock('./data/users-data.json')

const AppComponent = shallow(<App />)
const wrapper = AppComponent.instance()

describe('App Component', () => {
  describe('App Snapshots', () => {
    it('renders correctly when the `state` is empty', () => {
      expect(AppComponent).toMatchSnapshot()
    })
  
    it('renders correctly when there is `state`', () => {
      const tree = renderer.create(<App />).toJSON();
      expect(tree).toMatchSnapshot();
    })
  })

  it('testing clickFollowHandler method on the state\'s first user', () => {
    wrapper.clickFollowHandler('5d552d0058f193f2795fc814')
    expect(wrapper.state.users[0].isFollowed).toMatch('idle')
  })

  it('testing clickFollowHandler on the state\'s second user', () => {
    wrapper.clickFollowHandler('5d552d00b20b141dff10d2a2')
    expect(wrapper.state.users[1].isFollowed).toMatch('active')
  })

  it('Testing clickStarHandler method to have the expected effect on the state of the first user', () => {
    wrapper.clickStarHandler('5d552d0058f193f2795fc814')
    expect(wrapper.state.users[0].isStarred).toEqual('active')
  })

  it('calling the clickStarHandler method from App Component has the expected effect on the state of the second user', () => {
    wrapper.clickStarHandler('5d552d00b20b141dff10d2a2')
    expect(wrapper.state.users[1].isStarred).toEqual('idle')
  })
})
