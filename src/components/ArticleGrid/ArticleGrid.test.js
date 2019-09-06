import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from '../../enzyme'
import ArticleGrid from './ArticleGrid'

jest.mock('../Article/Article', () => () => 'Article')
jest.mock('../User/User', () => () => 'User')
const wrapper = mount(<ArticleGrid />)

describe('ArticleGrid', () => {
  fit('renders corrctly', () => {
    // wrapper.toJSON()
    expect(wrapper.children()).toMatchSnapshot()
  })

  xit('renders correctly using jest renderer', () => {
    const tree = renderer.create(<ArticleGrid />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
