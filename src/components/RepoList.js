import React, { Component } from 'react'
import RepoItem from './RepoItem'

class RepoList extends Component {
  state = {
    data_swarm: 0,
    simplesat: 0,
    simplesat_microservices: 0,
    iphoenix: 0,
    pronto_core: 0,
  }

  componentDidMount() {
    const token = ''

    let url = 'https://api.github.com/repos/prontotools/data-swarm/pulls'
    fetch(url, {
      headers: {
        Authorization: `token ${token}`
      }
    }).then(res => res.json())
      .then(json => {
        const data_swarm = json.length
        this.setState({
          ...this.prevState,
          data_swarm: data_swarm,
        })
      })

    url = 'https://api.github.com/repos/prontotools/simplesat/pulls'
    fetch(url, {
      headers: {
        Authorization: `token ${token}`
      }
    }).then(res => res.json())
      .then(json => {
        const simplesat = json.length
        this.setState({
          ...this.prevState,
          simplesat: simplesat,
        })
      })

    url = 'https://api.github.com/repos/prontotools/simplesat-microservices/pulls'
    fetch(url, {
      headers: {
        Authorization: `token ${token}`
      }
    }).then(res => res.json())
      .then(json => {
        const simplesat_microservices = json.length
        this.setState({
          ...this.prevState,
          simplesat_microservices: simplesat_microservices,
        })
      })

    url = 'https://api.github.com/repos/prontotools/iphoenix/pulls'
    fetch(url, {
      headers: {
        Authorization: `token ${token}`
      }
    }).then(res => res.json())
      .then(json => {
        const iphoenix = json.length
        this.setState({
          ...this.prevState,
          iphoenix: iphoenix,
        })
      })

    url = 'https://api.github.com/repos/prontodev/pronto-core/pulls'
    fetch(url, {
      headers: {
        Authorization: `token ${token}`
      }
    }).then(res => res.json())
      .then(json => {
        const pronto_core = json.length
        this.setState({
          ...this.prevState,
          pronto_core: pronto_core,
        })
      })
  }

  render() {
    return (
      <div className="ui grid">
        <RepoItem
          name="Data Swarm"
          slug="prontotools/data-swarm"
          number_of_prs={this.state.data_swarm} />
        <RepoItem
          name="SimpleSat"
          slug="prontotools/simplesat"
          number_of_prs={this.state.simplesat} />
        <RepoItem
          name="SimpleSat Microservices"
          slug="prontotools/simplesat-microservices"
          number_of_prs={this.state.simplesat_microservices} />
        <RepoItem
          name="iPhoenix"
          slug="prontotools/iphoenix"
          number_of_prs={this.state.iphoenix} />
        <RepoItem
          name="Pronto Core"
          slug="prontodev/pronto-core"
          number_of_prs={this.state.pronto_core} />
      </div>
    )
  }
}

export default RepoList
