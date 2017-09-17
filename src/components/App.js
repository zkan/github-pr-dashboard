import React, { Component } from 'react'
import Header from './Header'
import RepoList from './RepoList'

class App extends Component {
  render() {
    return (
      <div className="ui main container">
        <Header />
        <RepoList />
      </div>
    )
  }
}

export default App
