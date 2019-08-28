import React from 'react';
import renderer from 'react-test-renderer';
import TestRenderer from 'react-test-renderer';
import {shallow, mount} from '../../enzyme';

import User, {Icon} from './User';

const user = {
  "id": "5d552d0058f193f2795fc814",
  "isFollowed": "active",
  "isStared": "idle",
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
    isStared={user.isStared}
    isFollowed={user.isFollowed}
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
    isStared={user.isStared}
    isFollowed={user.isFollowed}
    image={user.image}
    handleFollowClick={mockFollowClick}
    handleStarClick={() => {}}
  />)

  const button = tree.root.findByType('button');
  button.props.onClick();
  expect(mockFollowClick).toHaveBeenCalledWith('5d552d0058f193f2795fc814');  
})



it('Change the style of the star svg', () => {
  const mockFollowClick = jest.fn();
  const mockStarClick = jest.fn();

  const testRenderer = TestRenderer.create(<User 
    key={user.id}
    id={user.id}
    name={user.name}
    date={user.date}
    readingTime={user.readingTime}
    isStared={user.isStared}
    isFollowed={user.isFollowed}
    image={user.image}
    handleFollowClick={mockFollowClick}
    handleStarClick={mockStarClick}
  />)

  const testInstance = testRenderer.root
  // const button = testInstance.findByType('button')
  // const icon = testInstance.findByType(Icon)
  // testRenderer.root.findByType(Icon).onClick()
  // testRenderer.root.findByType(Icon).onClick()
  expect(testInstance.findByType(Icon).props.color).toBe('grey')
  testInstance.findByType(Icon).simulate('click')
  expect(testInstance.findByType(Icon).props.color).toBe('gold')


  // button.props.onClick();
  // expect(mockFollowClick).toHaveBeenCalled();

  // button.props.onClick();
  // expect(mockFollowClick).toHaveBeenCalledWith('5d552d0058f193f2795fc814');

  // input.props.onChange();
  // expect(mockStarClick).toHaveBeenCalled();

  // icon.onClick();
  // expect(mockStarClick).toHaveBeenCalledWith('5d552d0058f193f2795fc814');
  
})