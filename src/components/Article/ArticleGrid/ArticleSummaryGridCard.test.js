import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from '../../../enzyme'
import ArticleSummaryGridCard from './ArticleSummaryGridCard'
import users from '../../../data/users-data.json'
import articles from '../../../data/articles-data.json'

jest.mock('../../../data/articles-data.json')
jest.mock('../../../data/users-data.json')

const ArticleSummaryGridWrapper = shallow(
  <ArticleSummaryGridCard
    {...articles[0]}
    user={users[0]}
    handleFollowClick={() => {}}
    handleStarClick={() => {}}
    handleClapClick={() => {}}
    handleBookmarkClick={() => {}}
  />
)

describe('ArticleSummaryGridCard', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ArticleSummaryGridCard
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
  ArticleSummaryGridWrapper.setProps({ bookmark: false })
  expect(ArticleSummaryGridWrapper.find('BookmarkUnfilled').exists()).toBeTruthy()
})

describe('checks didClap ternary', () => {
  it('renders ClapUnfilled componenet when `didClap` is false', () => {
    expect(ArticleSummaryGridWrapper.find('ClapUnfilled').exists()).toBeTruthy()
  })

  it('renders ClapFilled component when `didClap` is true', () => {
    ArticleSummaryGridWrapper.setProps({ didClap: true })
    expect(ArticleSummaryGridWrapper.find('ClapFilled').exists()).toBeTruthy()
  })
})
