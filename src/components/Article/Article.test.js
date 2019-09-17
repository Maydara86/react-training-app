import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from '../../enzyme'
import Article from './Article'
import { ClapUnfilled, ClapFilled, BookmarkUnfilled, BookmarkFilled } from '../Svg/Svg'
import users from '../../data/users-data.json'
import articles from '../../data/articles-data.json'

jest.mock('../../data/articles-data.json')
jest.mock('../../data/users-data.json')

const ArticleOne = shallow(
  <Article handleFollowClick={() => {}} handleStarClick={() => {}} useArticlesListLayout />
)

const ArticleTwo = shallow(<Article handleFollowClick={() => {}} handleStarClick={() => {}} />)

describe('ArticleOne with `useArticlesListLayout` NOT set', () => {
  it('renders correctly when `useArticlesListLayout` is not set', () => {
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
      ArticleOne.setProps({ bookmark: true })
    })

    it('renders BookmarkFilled component', () => {
      expect(ArticleOne.find('BookmarkFilled').exists()).toBeTruthy()
    })
  })

  describe('checks didClap ternary', () => {
    it('renders ClapUnfilled componenet when `didClap` is false', () => {
      expect(ArticleOne.find('ClapUnfilled').exists()).toBeTruthy()
    })

    it('renders ClapFilled component when `didClap` is true', () => {
      ArticleOne.setProps({ didClap: true })
      expect(ArticleOne.find('ClapFilled').exists()).toBeTruthy()
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

describe('ArticleTwo with `useArticlesListLayout` set', () => {
  it('renders correctly when `useArticlesListLayout` is set', () => {
    const tree = renderer
      .create(
        <Article
          {...articles[0]}
          user={users[0]}
          handleClapClick={() => {}}
          handleBookmarkClick={() => {}}
          handleFollowClick={() => {}}
          handleStarClick={() => {}}
          useArticlesListLayout
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('checks bookmark ternary', () => {
    beforeEach(() => {
      ArticleTwo.setProps({ bookmark: true })
    })

    it('renders BookmarkFilled component', () => {
      expect(ArticleTwo.find('BookmarkFilled').exists()).toBeTruthy()
    })
  })

  describe('checks didClap ternary', () => {
    it('renders ClapUnfilled componenet when `didClap` is false', () => {
      expect(ArticleTwo.find('ClapUnfilled').exists()).toBeTruthy()
    })

    it('renders ClapFilled component when `didClap` is true', () => {
      ArticleTwo.setProps({ didClap: true })
      expect(ArticleTwo.find('ClapFilled').exists()).toBeTruthy()
    })
  })
})
