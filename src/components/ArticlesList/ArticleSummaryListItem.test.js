import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from '../../enzyme'
import ArticleSummaryListItem from './ArticleSummaryListItem'
import { ClapUnfilled, ClapFilled, BookmarkUnfilled, BookmarkFilled } from '../Svg/Svg'
import users from '../../data/users-data.json'
import articles from '../../data/articles-data.json'

jest.mock('../../data/articles-data.json')
jest.mock('../../data/users-data.json')

const ArticleSummaryWrapper = shallow(
  <ArticleSummaryListItem
    {...articles[0]}
    user={users[0]}
    handleFollowClick={() => {}}
    handleStarClick={() => {}}
    handleClapClick={() => {}}
    handleBookmarkClick={() => {}}
  />
)

describe('ArticleSummaryListItem', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ArticleSummaryListItem
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

  // describe('checks bookmark ternary', () => {
  //   beforeEach(() => {
  //     ArticleOne.setProps({ bookmark: true })
  //   })

  //   it('renders BookmarkFilled component', () => {
  //     expect(ArticleOne.find('BookmarkFilled').exists()).toBeTruthy()
  //   })
  // })

  // describe('checks didClap ternary', () => {
  //   it('renders ClapUnfilled componenet when `didClap` is false', () => {
  //     expect(ArticleOne.find('ClapUnfilled').exists()).toBeTruthy()
  //   })

  //   it('renders ClapFilled component when `didClap` is true', () => {
  //     ArticleOne.setProps({ didClap: true })
  //     expect(ArticleOne.find('ClapFilled').exists()).toBeTruthy()
  //   })
  // })
})

describe('ArticleSummaryWrapper with `useArticlesListLayout` set', () => {
  it('renders correctly when `useArticlesListLayout` is set', () => {
    const tree = renderer
      .create(
        <ArticleSummaryListItem
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

  // describe('checks bookmark ternary', () => {
  //   ArticleSummaryWrapper.setProps({ bookmark: true })

  //   xit('renders BookmarkFilled component', () => {
  //     expect(ArticleSummaryWrapper.find('BookmarkFilled').exists()).toBeTruthy()
  //   })

  ArticleSummaryWrapper.setProps({ bookmark: false })

  xit('renders BookmarkUnfilled component', () => {
    expect(ArticleSummaryWrapper.find('BookmarkUnfilled').exists()).toBeTruthy()
  })
  // })

  describe('checks didClap ternary', () => {
    it('renders ClapUnfilled componenet when `didClap` is false', () => {
      expect(ArticleSummaryWrapper.find('ClapUnfilled').exists()).toBeTruthy()
    })

    it('renders ClapFilled component when `didClap` is true', () => {
      ArticleSummaryWrapper.setProps({ didClap: true })
      expect(ArticleSummaryWrapper.find('ClapFilled').exists()).toBeTruthy()
    })
  })
})
