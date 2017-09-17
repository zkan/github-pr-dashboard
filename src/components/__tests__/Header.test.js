import React from 'react'
import { shallow } from 'enzyme'
import Header from '../Header'

describe('<Header />', () => {
  it('should render GitHub PR Dashboard', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.contains(
      <h1 className="ui dividing header">GitHub PR Dashboard</h1>
    )).toEqual(true)
  })
})
