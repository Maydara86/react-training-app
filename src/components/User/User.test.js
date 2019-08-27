import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount} from '../../enzyme';

import User from './User';

const user = {
  "id": "5d552d0058f193f2795fc814",
  "isFollowed": "active",
  "isStared": "idle",
  "image": "./assets/images/avata.png",
  "readingTime": 20,
  "name": "Walton Morton",
  "date": "Aug 9"
};

it('renders correctly when there are no user', () => {
  const tree = renderer.create(<User 
    key={''}
    id={''}
    name={''}
    date={''}
    readingTime={''}
    isStared={''}
    isFollowed={''}
    image={''}
    handleFollowClick={() => {}}
    handleStarClick={() => {}} 
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

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
  const mockStarClick = jest.fn();

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
    handleStarClick={mockStarClick}
  />)

  const button = tree.root.findByType('button');
  // const input = tree.root.findByType('input');

  // button.props.onClick();
  // expect(mockFollowClick).toHaveBeenCalled();

  button.props.onClick();
  expect(mockFollowClick).toHaveBeenCalledWith('5d552d0058f193f2795fc814');

  // input.props.onChange();
  // expect(mockStarClick).toHaveBeenCalled();

  // input.props.onChange();
  // expect(mockStarClick).toHaveBeenCalledWith('5d552d0058f193f2795fc814');
  
})

it('when the follow button is clicked a callback is executed', () => {
  const mockFollowClick = jest.fn();
  const mockStarClick = jest.fn();

  const tree = renderer.create(<User 
    key={user.id}
    id={user.id}
    name={user.name}
    date={user.date}
    readingTime={user.readingTime}
    isStared='active'
    isFollowed={user.isFollowed}
    image={user.image}
    handleFollowClick={mockFollowClick}
    handleStarClick={mockStarClick}
  />)

  const button = tree.root.findByType('button');
  // const input = tree.root.findByType('input');

  // button.props.onClick();
  // expect(mockFollowClick).toHaveBeenCalled();

  button.props.onClick();
  expect(mockFollowClick).toHaveBeenCalledWith('5d552d0058f193f2795fc814');

  // input.props.onChange();
  // expect(mockStarClick).toHaveBeenCalled();

  // input.props.onChange();
  // expect(mockStarClick).toHaveBeenCalledWith('5d552d0058f193f2795fc814');
  
})





// describe('User Component', () => {
//   it('clicking on the follow button will trigger the click handler', () => {
//     const mockFollowHandler = jest.fn();
//     const mockStarHandler = jest.fn();
//     const wrapper = mount(<User 
//       key={user.id}
//       id={user.id}
//       name={user.name}
//       date={user.date}
//       readingTime={user.readingTime}
//       isStared={user.isStared}
//       isFollowed={user.isFollowed}
//       image={user.image}
//       handleFollowClick={mockFollowHandler} 
//       handleStarClick={mockStarHandler} 
//     />)
//     wrapper.find('button').simulate('click');
//     expect(mockFollowHandler).toHaveBeenCalledWith('5d552d0058f193f2795fc814')
//   })

//   it('changing the star checkbox will trigger an onChange handler', () => {
//     const mockFollowHandler = jest.fn();
//     const mockStarHandler = jest.fn();
//     const wrapper = mount(<User 
//       key={user.id}
//       id={user.id}
//       name={user.name}
//       date={user.date}
//       readingTime={user.readingTime}
//       isStared={user.isStared}
//       isFollowed={user.isFollowed}
//       image={user.image}
//       handleFollowClick={mockFollowHandler} 
//       handleStarClick={mockStarHandler} 
//     />)
//     wrapper.find('input').simulate('change');
//     expect(mockStarHandler).toHaveBeenCalledWith('5d552d0058f193f2795fc814');
//   })
// });