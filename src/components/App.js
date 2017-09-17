import React, { Component } from 'react'
import Header from './Header'
import PullRequestList from './PullRequestList'

class App extends Component {
  render() {
    return (
      <div className="ui main container">
        <Header />
        <PullRequestList />
      </div>
    )
  }
}

export default App
