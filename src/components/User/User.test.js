import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import User from './User';

configure({ adapter: new Adapter() });

test('User follow button changes the text after click', () => {
  // Render a button in the document
  const button = shallow(<User isFollowed="active" />);

  expect(button.text()).toEqual('Follow');

  button.find('button').simulate('change');

  expect(button.text()).toEqual('Unfollow');
});