import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from '../../../enzyme'
import ArticleSummaryListItem from './ArticleSummaryListItem'
import users from '../../../data/users-data.json'
import articles from '../../../data/articles-data.json'

jest.mock('../../../data/articles-data.json')
jest.mock('../../../data/users-data.json')

const ArticleSummaryListWrapper = shallow(
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
})

it('renders BookmarkUnfilled component when bookmark is false', () => {
  ArticleSummaryListWrapper.setProps({ bookmark: false })
  expect(ArticleSummaryListWrapper.find('BookmarkUnfilled').exists()).toBeTruthy()
})

describe('checks didClap ternary', () => {
  it('renders ClapUnfilled componenet when `didClap` is false', () => {
    expect(ArticleSummaryListWrapper.find('ClapUnfilled').exists()).toBeTruthy()
  })

  it('renders ClapFilled component when `didClap` is true', () => {
    ArticleSummaryListWrapper.setProps({ didClap: true })
    expect(ArticleSummaryListWrapper.find('ClapFilled').exists()).toBeTruthy()
  })
})
