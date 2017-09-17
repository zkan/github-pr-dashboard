import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import Header from '../Header'
import PullRequestList from '../PullRequestList'

describe('<App />', () => {
  it('should contain components', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.containsAllMatchingElements([
      <Header />,
      <PullRequestList />,
    ])).toEqual(true)
  })

  it('should render one Header component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Header)).toHaveLength(1)
  })

  it('should render one PullRequestList component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(PullRequestList)).toHaveLength(1)
  })
})
