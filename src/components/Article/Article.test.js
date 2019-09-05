import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from '../../enzyme'
import Article, { ClapUnfilled, ClapFilled, BookmarkUnfilled, BookmarkFilled } from './Article'
import users from '../../data/users-data.json'
import articles from '../../data/articles-data.json'

jest.mock('../../data/articles-data.json')
jest.mock('../../data/users-data.json')

const ArticleComponent = shallow(
  <Article handleFollowClick={() => {}} handleStarClick={() => {}} />
)

describe('Article', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Article
          {...articles[0]}
          user={users[0]}
          handleClapClick={() => {}}
          handleBookmarkClick={() => {}}
          handleFollowClick={() => {}}
          handleStarClick={() => {}}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
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
