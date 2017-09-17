import React, { Component } from 'react'

class RepoList extends Component {
  state = {
    data_swarm: 0,
    simplesat: 0,
    simplesat_microservices: 0,
    iphoenix: 0,
    pronto_core: 0,
  }

  componentDidMount() {
    const token = '';

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
        <div className="four wide column">
          <div className="ui card">
            <div className="content">
              <div className="header">Data Swarm</div>
            </div>
            <div className="content">
              <h4 className="ui sub header"><i className="github alternate icon"></i> prontotools/data-swarm</h4>
              <div className="ui small feed">
                <div className="event">
                  <div className="content">
                    <div className="summary center aligned">
                       <a href="https://github.com/prontotools/data-swarm/pulls/" target="_blank" rel="noopener noreferrer">{ this.state.data_swarm }</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="four wide column">
          <div className="ui card">
            <div className="content">
              <div className="header">SimpleSat</div>
            </div>
            <div className="content">
              <h4 className="ui sub header"><i className="github alternate icon"></i> prontotools/simplesat</h4>
              <div className="ui small feed">
                <div className="event">
                  <div className="content">
                    <div className="summary center aligned">
                       <a href="https://github.com/prontotools/simplesat/pulls/" target="_blank" rel="noopener noreferrer">{ this.state.simplesat }</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="four wide column">
          <div className="ui card">
            <div className="content">
              <div className="header">SimpleSat Microservices</div>
            </div>
            <div className="content">
              <h4 className="ui sub header"><i className="github alternate icon"></i> prontotools/simplesat-microservices</h4>
              <div className="ui small feed">
                <div className="event">
                  <div className="content">
                    <div className="summary center aligned">
                       <a href="https://github.com/prontotools/simplesat-microservices/pulls/" target="_blank" rel="noopener noreferrer">{ this.state.simplesat_microservices }</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="four wide column">
          <div className="ui card">
            <div className="content">
              <div className="header">iPhoenix</div>
            </div>
            <div className="content">
              <h4 className="ui sub header"><i className="github alternate icon"></i> prontotools/iphoenix</h4>
              <div className="ui small feed">
                <div className="event">
                  <div className="content">
                    <div className="summary center aligned">
                       <a href="https://github.com/prontotools/iphoenix/pulls/" target="_blank" rel="noopener noreferrer">{ this.state.iphoenix }</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="four wide column">
          <div className="ui card">
            <div className="content">
              <div className="header">Pronto Core</div>
            </div>
            <div className="content">
              <h4 className="ui sub header"><i className="github alternate icon"></i> prontodev/pronto-core</h4>
              <div className="ui small feed">
                <div className="event">
                  <div className="content">
                    <div className="summary center aligned">
                       <a href="https://github.com/prontodev/pronto-core/pulls/" target="_blank" rel="noopener noreferrer">{ this.state.pronto_core }</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RepoList
