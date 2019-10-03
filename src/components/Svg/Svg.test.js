import React from 'react'
import { shallow } from '../../enzyme'
import { ClapUnfilled, ClapFilled, BookmarkUnfilled, BookmarkFilled } from './Svg'

jest.mock('../../data/articles-data.json')
jest.mock('../../data/users-data.json')

describe('Bookmark Components', () => {
  const mockHandleBookmarkClick = jest.fn()
  const bookmarkProps = { id: '5d66ae9445543ffea5167d5e', bookmarkClick: mockHandleBookmarkClick }
  const BookmarkFilledComponent = shallow(<BookmarkFilled {...bookmarkProps} />)
  const BookmarkUnfilledComponent = shallow(<BookmarkUnfilled {...bookmarkProps} />)

  it('when bookmarkClick is activated', () => {
    BookmarkFilledComponent.simulate('click')
    expect(mockHandleBookmarkClick).toHaveBeenCalledWith(bookmarkProps.id)
  })

  it('when bookmarkClick is deactivated', () => {
    BookmarkUnfilledComponent.simulate('click')
    expect(mockHandleBookmarkClick).toHaveBeenCalledWith(bookmarkProps.id)
  })
})

describe('Clap Components', () => {
  const mockHandleClapClick = jest.fn()
  const clapProps = { id: '5d66ae9445543ffea5167d5e', handleClapClick: mockHandleClapClick }
  const ClapFilledComponent = shallow(<ClapFilled {...clapProps} />)
  const ClapUnfilledComponent = shallow(<ClapUnfilled {...clapProps} />)

  it('when ClapUnfilled is clicked', () => {
    ClapUnfilledComponent.simulate('click')
    expect(mockHandleClapClick).toHaveBeenCalledWith(clapProps.id)
  })

  it('when ClapFilled is clicked', () => {
    ClapFilledComponent.simulate('click')
    expect(mockHandleClapClick).toHaveBeenCalledWith(clapProps.id)
  })
})
