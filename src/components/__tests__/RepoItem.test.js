import React from 'react'
import { shallow } from 'enzyme'
import RepoItem from '../RepoItem'

describe('<RepoItem />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <RepoItem
        name="Data Swarm"
        slug="prontotools/data-swarm"
        number_of_prs="3" />
    )
  })

  it('should have one element with `.four.wide.column` class', () => {
    expect(wrapper.find('.four.wide.column')).toHaveLength(1)
  })

  it('should have repo name', () => {
    expect(wrapper.contains(<div className="header">Data Swarm</div>)).toEqual(true)
  })

  it('should have repo slug', () => {
    expect(wrapper.contains(
      <h4 className="ui sub header"><i className="github alternate icon"></i> prontotools/data-swarm</h4>
    )).toEqual(true)
  })

  it('should have number of PRs and link to PR page', () => {
    expect(wrapper.contains(
      <a href="https://github.com/prontotools/data-swarm/pulls/" target="_blank" rel="noopener noreferrer">3</a>
    )).toEqual(true)
  })
})
