import React from 'react';
import renderer from 'react-test-renderer';
import TestRenderer from 'react-test-renderer';
import {shallow, mount} from '../../enzyme';

import User, {Icon} from './User';

const user = {
  "id": "5d552d0058f193f2795fc814",
  "isFollowed": "active",
  "isStarred": "idle",
  "image": "./assets/images/avata.png",
  "readingTime": 20,
  "name": "Walton Morton",
  "date": "Aug 9"
}

it('renders correctly when there is one user', () => {

  const tree = renderer.create(<User 
    key={user.id}
    id={user.id}
    name={user.name}
    date={user.date}
    readingTime={user.readingTime}
    isStarred={false}
    isFollowed={false}
    image={user.image}
    handleFollowClick={() => 'test'}
    handleStarClick={() => {}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});



it('when the follow button is clicked a callback is executed', () => {
  const mockFollowClick = jest.fn();

  const tree = renderer.create(<User 
    key={user.id}
    id={user.id}
    name={user.name}
    date={user.date}
    readingTime={user.readingTime}
    isStarred={user.isStarred}
    isFollowed={user.isFollowed}
    image={user.image}
    handleFollowClick={mockFollowClick}
    handleStarClick={() => {}}
  />)

  const button = tree.root.findByType('button');
  button.props.onClick();
  expect(mockFollowClick).toHaveBeenCalledWith('5d552d0058f193f2795fc814');  
})



it('Change the style of the star svg depending on the', () => {
  const mockFollowClick = jest.fn();
  const mockStarClick = jest.fn();

  const testRenderer = TestRenderer.create(<User 
    key={user.id}
    id={user.id}
    name={user.name}
    date={user.date}
    readingTime={user.readingTime}
    isStarred={true}
    isFollowed={true}
    image={user.image}
    handleFollowClick={mockFollowClick}
    handleStarClick={mockStarClick}
  />)

  const testInstance = testRenderer.root
  expect(testInstance.findByType(Icon).props.color).toBe('gold')
})

it('Simulate a click on the svg star', () => {
  const mockStarClick = jest.fn();
  const testRenderer = TestRenderer.create(<Icon 
    color='grey' 
    handleStarClick={mockStarClick} 
    id='5d552d0058f193f2795fc814' 
  />)

  const testInstance = testRenderer.root
  let svg = testInstance.findByType('svg')
  svg.props.onClick()
  // expect(testInstance.props.color).toBe('gold')
  expect(mockStarClick).toHaveBeenCalledWith('5d552d0058f193f2795fc814')
})