import React from 'react'
import renderer from 'react-test-renderer'
import toJson from 'enzyme-to-json'
import { mount, shallow, render } from '../../enzyme'
import ArticleGrid from './ArticleGrid'

jest.mock('../Article/Article', () => 'Article')
jest.mock('../User/User', () => 'User')
jest.mock('../Svg/Svg', () => 'ClapFilled')
jest.mock('../Svg/Svg', () => 'ClapUnfilled')
jest.mock('../Svg/Svg', () => 'BookmarkFilled')
jest.mock('../Svg/Svg', () => 'BookmarkUnfilled')
jest.mock('../Svg/Svg', () => 'Star')

describe('ArticleGrid', () => {
  xit('renders corrctly using mount', () => {
    const wrapper = mount(<ArticleGrid />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  xit('renders corrctly using shallow', () => {
    const articleGrid = shallow(<ArticleGrid />)
    expect(articleGrid).toMatchSnapshot()
  })

  xit('renders corrctly using enzym render', () => {
    const articleGridRender = render.create(<ArticleGrid />)
    expect(articleGridRender).toMatchSnapshot()
  })

  xit('renders correctly using jest renderer', () => {
    const tree = renderer.create(<ArticleGrid />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
