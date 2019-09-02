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
    {...user}
    handleFollowClick={() => 'test'}
    handleStarClick={() => {}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});



it('when the follow button is clicked a callback is executed', () => {
  const mockFollowClick = jest.fn();

  const tree = renderer.create(<User 
    {...user}
    handleFollowClick={mockFollowClick}
    handleStarClick={() => {}}
  />)

  const button = tree.root.findByType('button');
  button.props.onClick();
  expect(mockFollowClick).toHaveBeenCalledWith('5d552d0058f193f2795fc814');  
})



it('renders the right color depending on the `isStarred`', () => {
  const mockFollowClick = jest.fn();
  const mockStarClick = jest.fn();

  const testRenderer = TestRenderer.create(<User 
    {...user}
    isStarred='active'
    isFollowed='idle'
    handleFollowClick={mockFollowClick}
    handleStarClick={mockStarClick}
  />)

  const testInstance = testRenderer.root
  expect(testInstance.findByType(Icon).props.color).toBe('gold')
})

it('when user clicks on the star icon', () => {
  const mockStarClick = jest.fn();
  const testRenderer = TestRenderer.create(<Icon 
    color='grey' 
    handleStarClick={mockStarClick} 
    id='5d552d0058f193f2795fc814' 
  />)

  const testInstance = testRenderer.root
  let svg = testInstance.findByType('svg')
  svg.props.onClick()
  expect(mockStarClick).toHaveBeenCalledWith('5d552d0058f193f2795fc814')
})

it('checks if the User is called from an article', () => {
  const tree = renderer.create(<User 
    {...user}
    calledFromArticle={true}
    handleFollowClick={() => {}}
    handleStarClick={() => {}}
  />)
  expect(tree).toMatchSnapshot();  
})