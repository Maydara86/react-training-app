import React from 'react'
import TestRenderer from 'react-test-renderer'
import { shallow } from '../../enzyme'
import UserWithFollowButton from './UserWithFollowButton'

const user = {
  id: '5d552d0058f193f2795fc814',
  isFollowed: true,
  isStarred: false,
  image: './assets/images/avata.png',
  readingTime: 20,
  name: 'Walton Morton',
  date: 'Aug 9',
}

it('when the follow button is clicked a callback is executed', () => {
  const mockFollowClick = jest.fn()

  const wrapper = shallow(
    <UserWithFollowButton
      user={user}
      handleFollowClick={mockFollowClick}
      handleStarClick={() => {}}
    />
  )
  const button = wrapper.find('button')
  button.simulate('click')
  expect(mockFollowClick).toHaveBeenCalledWith('5d552d0058f193f2795fc814')
})

describe('Show Follow or Unfollow', () => {
  it('Shows Follow', () => {
    const tree = TestRenderer.create(
      <UserWithFollowButton user={user} handleFollowClick={() => {}} handleStarClick={() => {}} />
    )
    const button = tree.root.findByType('button')
    expect(button.children[0]).toEqual('Unfollow')
  })

  it('Shows Follow', () => {
    user.isFollowed = false
    const tree = TestRenderer.create(
      <UserWithFollowButton user={user} handleFollowClick={() => {}} handleStarClick={() => {}} />
    )
    const button = tree.root.findByType('button')
    expect(button.children[0]).toEqual('Follow')
  })
})
