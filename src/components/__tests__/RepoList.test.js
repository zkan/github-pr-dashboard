import React from 'react'
import { shallow } from 'enzyme'
import RepoList from '../RepoList'
import RepoItem from '../RepoItem'

describe('<RepoList />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<RepoList />)
  })

  it('should have one element with `.ui.grid` class', () => {
    expect(wrapper.find('.ui.grid')).toHaveLength(1)
  })

  it('should have five RepoItem elements', () => {
    expect(wrapper.find(RepoItem)).toHaveLength(5)
  })
})
