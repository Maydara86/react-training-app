import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from '../../enzyme'
import Search from './Search'

describe('Search Component', () => {
  const testRenderer = renderer.create(<Search search="" changeSearchHandler={() => {}} />)
  const testInstance = testRenderer.root
  it('Should render correctly when `search` is empty', () => {
    expect(testInstance.findByType('input').props.value).toEqual('')
  })

  const testRendererTwo = renderer.create(
    <Search search="something" changeSearchHandler={() => {}} />
  )
  const testInstanceTwo = testRendererTwo.root
  it('Should render correctly when `search` is empty', () => {
    expect(testInstanceTwo.findByType('input').props.value).toEqual('something')
  })
})
