import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from './enzyme';
import App from './App';

jest.mock('./data/users-data.json')
let {user} = require('./data/users-data.json')


describe('App Component', () => {
  it('testing clickFollowHandler method to have the expected effect on the state of the first user', () => {
    const AppComponent = shallow(<App />)
    const wrapper = AppComponent.instance()
    wrapper.clickFollowHandler('5d552d0058f193f2795fc814')
    expect(wrapper.state.users[0].isFollowed).toMatch('idle')
  })

  it('testing clickFollowHandler method to have the expected effect on the state of the second user', () => {
    const AppComponent = shallow(<App />)
    const wrapper = AppComponent.instance()
    wrapper.clickFollowHandler('5d552d00b20b141dff10d2a2')
    expect(wrapper.state.users[1].isFollowed).toMatch('active')
  })

  it('Testing clickStarHandler method to have the expected effect on the state of the first user', () => {
    const AppComponent = shallow(<App />)
    const wrapper = AppComponent.instance()
    wrapper.clickStarHandler('5d552d0058f193f2795fc814')
    expect(wrapper.state.users[0].isStared).toEqual('active')
  })

  it('calling the clickStarHandler method from App Component has the expected effect on the state of the second user', () => {
    const AppComponent = shallow(<App />)
    const wrapper = AppComponent.instance()
    wrapper.clickStarHandler('5d552d00b20b141dff10d2a2')
    expect(wrapper.state.users[1].isStared).toEqual('idle')
  })
})
