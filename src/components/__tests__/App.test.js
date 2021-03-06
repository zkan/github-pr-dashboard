import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import Header from '../Header'
import RepoList from '../RepoList'

describe('<App />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should contain components', () => {
    expect(wrapper.containsAllMatchingElements([
      <Header />,
      <RepoList />,
    ])).toEqual(true)
  })

  it('should contain semantic-ui `ui main container` class', () => {
    expect(wrapper.find('.ui.main.container')).toHaveLength(1)
  })

  it('should render one Header component', () => {
    expect(wrapper.find(Header)).toHaveLength(1)
  })

  it('should render one RepoList component', () => {
    expect(wrapper.find(RepoList)).toHaveLength(1)
  })
})
