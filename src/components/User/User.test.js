import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount} from '../../enzyme';

import User from './User';
import App from '../../App';

const users = [{
  "id": "5d552d0058f193f2795fc814",
  "isFollowed": "active",
  "isStared": "idle",
  "image": "./assets/images/avata.png",
  "readingTime": 20,
  "name": "Walton Morton",
  "date": "Aug 9"
}];

it('renders correctly when there are no users', () => {
  const tree = renderer.create(<User 
    users={[]} 
    handleFollowClick={() => 'test'}
    handleStarClick={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when there is one user', () => {

  const tree = renderer.create(<User users={users}
    handleFollowClick={() => 'test'}
    handleStarClick={() => {}}
     />).toJSON();
  expect(tree).toMatchSnapshot();
 });

 describe('App Component', () => {
  it('calling method from App Component has the expected effect on the state', () => {
    AppComponent = shallow(<App />)
    const wrapper = AppComponent.instance();
    wrapper.clickFollowHandler('5d552d0058f193f2795fc814'); //mock maybe
    expect(wrapper.state).toEqual({
      "id": "5d552d0058f193f2795fc814",
      "isFollowed": "idle",
      "isStared": "idle",
      "image": "./assets/images/avata.png",
      "readingTime": 20,
      "name": "Walton Morton",
      "date": "Aug 9"
    })
  })
});
describe('User Component', () => {
  it('clicking on the button will trigger the click handler', () => {
    const mockHandler = jest.fn();
    wrapper = mount(<User users={users} handleFollowClick={mockHandler} handleStarClick={mockHandler} />)
    wrapper.find('button').simulate('click');
    expect(mockHandler).toHaveBeenCalled();
  })
});

// it('when the follow button is clicked a callback is executed', () => {
//   const mockFollowClick = jest.fn();
//   const mockStarClick = jest.fn();

//   const tree = renderer.create(<User users={users}
//       handleFollowClick={mockFollowClick}
//       handleStarClick={mockStarClick}
//   />)

//   const button = tree.root.findByType('button');
//   const input = tree.root.findByType('input');

//   button.props.onClick();
//   expect(mockFollowClick).toHaveBeenCalled();

//   button.props.onClick();
//   expect(mockFollowClick).toHaveBeenCalledWith('5d552d0058f193f2795fc814');

//   input.props.onChange();
//   expect(mockStarClick).toHaveBeenCalled();
// })