import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from './enzyme';
import App from './App';

jest.mock('./data/users-data.json')
let {user} = require('./data/users-data.json')

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('App Component', () => {
  it('calling the clickFollowHandler method from App Component has the expected effect on the state of the first user', () => {
    const AppComponent = shallow(<App />)
    const wrapper = AppComponent.instance()
    wrapper.clickFollowHandler('5d552d0058f193f2795fc814')
    expect(wrapper.state.users[0].isFollowed).toEqual('idle')
  })
})




describe('App Component', () => {
  it('calling the clickStarHandler method from App Component has the expected effect on the state of the second user', () => {
    const AppComponent = shallow(<App />)
    const wrapper = AppComponent.instance()
    wrapper.clickStarHandler('5d552d00b20b141dff10d2a2')
    expect(wrapper.state.users[1].isStared).toEqual('idle')
  })
})