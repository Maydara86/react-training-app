import React from 'react';
import renderer from 'react-test-renderer';

import User from './User';

it('renders correctly when there are no users', () => {
  const tree = renderer.create(<User 
    users={[]} 
    handleFollowClick={() => 'test'}
    handleStarClick={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when there is one user', () => {
  const users = [{
    "id": "5d552d0058f193f2795fc814",
    "isFollowed": "active",
    "isStared": "idle",
    "image": "./assets/images/avata.png",
    "readingTime": 20,
    "name": "Walton Morton",
    "date": "Aug 9"
  }];
  const tree = renderer.create(<User users={users}
    handleFollowClick={() => 'test'}
    handleStarClick={() => {}}
     />).toJSON();
  expect(tree).toMatchSnapshot();
 });