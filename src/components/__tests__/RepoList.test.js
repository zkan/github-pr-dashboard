import React from 'react'
import { shallow } from 'enzyme'
import RepoList from '../RepoList'

describe('<RepoList />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<RepoList />)
  })

  it('should have one element with `.ui.grid` class', () => {
    expect(wrapper.find('.ui.grid')).toHaveLength(1)
  })

  it('should have five elements with `.four.wide.column` class', () => {
    expect(wrapper.find('.four.wide.column')).toHaveLength(5)
  })

  it('should contain project header', () => {
    expect(wrapper.containsMatchingElement(
      <div className="header">Data Swarm</div>
    )).toEqual(true)
    expect(wrapper.containsMatchingElement(
      <div className="header">SimpleSat</div>
    )).toEqual(true)
    expect(wrapper.containsMatchingElement(
      <div className="header">SimpleSat Microservices</div>
    )).toEqual(true)
    expect(wrapper.containsMatchingElement(
      <div className="header">iPhoenix</div>
    )).toEqual(true)
    expect(wrapper.containsMatchingElement(
      <div className="header">Pronto Core</div>
    )).toEqual(true)
  })
})
