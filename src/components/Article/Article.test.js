import React from 'react'
import { shallow } from '../../enzyme'
import Article, { ClapUnfilled, ClapFilled, BookmarkUnfilled, BookmarkFilled } from './Article'

describe('Article', () => {
  const ArticleComponent = shallow(
    <Article handleFollowClick={() => {}} handleStarClick={() => {}} />
  )

  it('renders correctly', () => {
    expect(ArticleComponent).toMatchSnapshot()
  })

  describe('checks bookmark ternary', () => {
    beforeEach(() => {
      ArticleComponent.setProps({ bookmark: true })
    })

    it('renders BookmarkFilled component', () => {
      expect(ArticleComponent.find('BookmarkFilled').exists()).toBeTruthy()
    })
  })

  describe('checks didClap ternary', () => {
    beforeEach(() => {
      ArticleComponent.setProps({ didClap: true })
    })
    it('renders ClapFilled component', () => {
      expect(ArticleComponent.find('ClapFilled').exists()).toBeTruthy()
    })
  })

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
})
