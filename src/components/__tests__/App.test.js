import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import Header from '../Header'
import PullRequestList from '../PullRequestList'

describe('<App />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should contain components', () => {
    expect(wrapper.containsAllMatchingElements([
      <Header />,
      <PullRequestList />,
    ])).toEqual(true)
  })

  it('should render one Header component', () => {
    expect(wrapper.find(Header)).toHaveLength(1)
  })

  it('should render one PullRequestList component', () => {
    expect(wrapper.find(PullRequestList)).toHaveLength(1)
  })
})
