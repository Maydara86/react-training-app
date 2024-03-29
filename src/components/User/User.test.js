import React from 'react'
import renderer from 'react-test-renderer'
import User from './User'
import { Star } from '../Svg/Svg'

const user = {
  id: '5d552d0058f193f2795fc814',
  isFollowed: true,
  isStarred: false,
  image: './assets/images/avata.png',
  readingTime: 20,
  name: 'Walton Morton',
  date: 'Aug 9',
}

it('renders correctly when there is one user', () => {
  const tree = renderer
    .create(<User {...user} handleFollowClick={() => 'test'} handleStarClick={() => {}} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
describe('renders the right color depending on the `isStarred`', () => {
  it('When `isStarred` is false', () => {
    const mockFollowClick = jest.fn()
    const mockStarClick = jest.fn()

    const testRenderer = renderer.create(
      <User {...user} handleFollowClick={mockFollowClick} handleStarClick={mockStarClick} />
    )

    const testInstance = testRenderer.root
    expect(testInstance.findByType(Star).props.color).toBe('grey')
  })

  it('When `isStarred` is true', () => {
    const mockFollowClick = jest.fn()
    const mockStarClick = jest.fn()

    const testRenderer = renderer.create(
      <User
        {...user}
        isStarred
        handleFollowClick={mockFollowClick}
        handleStarClick={mockStarClick}
      />
    )

    const testInstance = testRenderer.root
    expect(testInstance.findByType(Star).props.color).toBe('gold')
  })
})

it('when user clicks on the star icon', () => {
  const mockStarClick = jest.fn()
  const testRenderer = renderer.create(
    <Star color="grey" handleStarClick={mockStarClick} id="5d552d0058f193f2795fc814" />
  )

  const testInstance = testRenderer.root
  const svg = testInstance.findByType('svg')
  svg.props.onClick()
  expect(mockStarClick).toHaveBeenCalledWith('5d552d0058f193f2795fc814')
})

it('checks if the User is called from an article', () => {
  const tree = renderer.create(
    <User {...user} useSimplifiedLayout handleFollowClick={() => {}} handleStarClick={() => {}} />
  )
  expect(tree).toMatchSnapshot()
})
