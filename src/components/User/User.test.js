import React from 'react';
import renderer from 'react-test-renderer';

import User from './User';

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

it('when the follow button is clicked a callback is executed', () => {
  const mockFollowClick = jest.fn();
  const mockStarClick = jest.fn();

  const tree = renderer.create(<User users={users}
      handleFollowClick={mockFollowClick}
      handleStarClick={mockStarClick}
  />)

  const button = tree.root.findByType('button');
  const input = tree.root.findByType('input');

  button.props.onClick();
  expect(mockFollowClick).toHaveBeenCalled();

  // button.props.onClick();
  // expect(mockFollowClick).toHaveBeenCalledWith('5d552d0058f193f2795fc814');

  input.props.onChange();
  expect(mockStarClick).toHaveBeenCalled();
})