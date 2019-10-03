import React from 'react'
import renderer from 'react-test-renderer'
import Search from './Search'

describe('Search Component', () => {
  const testRenderer = renderer.create(<Search searchTerm="" changeSearchHandler={() => {}} />)
  const testInstance = testRenderer.root
  it('Should render correctly when `searchTerm` is empty', () => {
    expect(testInstance.findByType('input').props.value).toEqual('')
  })

  const testRendererTwo = renderer.create(
    <Search searchTerm="something" changeSearchHandler={() => {}} />
  )
  const testInstanceTwo = testRendererTwo.root
  it('Should render correctly when `searchTerm` is empty', () => {
    expect(testInstanceTwo.findByType('input').props.value).toEqual('something')
  })
})
