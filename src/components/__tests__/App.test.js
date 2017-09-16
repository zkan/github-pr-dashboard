import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'enzyme'
import App from '../App'

describe('<App />', () => {
  it('renders GitHub PR Dashboard', () => {
    const wrapper = render(<App />)
    expect(wrapper.text()).toBe('GitHub PR Dashboard')
  })
})
