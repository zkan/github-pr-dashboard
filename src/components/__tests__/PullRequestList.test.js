import React from 'react'
import { shallow } from 'enzyme'
import PullRequestList from '../PullRequestList'

describe('<PullRequestList />', () => {
  it('should render Pull Request List', () => {
    const wrapper = shallow(<PullRequestList />)
    expect(wrapper.contains(<div>Pull Request List</div>)).toEqual(true)
  })
})
