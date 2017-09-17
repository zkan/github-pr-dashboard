import React, { Component } from 'react'

const RepoItem = (props) => (
  <div className="four wide column">
    <div className="ui card">
      <div className="content">
        <div className="header">{props.name}</div>
      </div>
      <div className="content">
        <h4 className="ui sub header"><i className="github alternate icon"></i> {props.slug}</h4>
        <div className="ui small feed">
          <div className="event">
            <div className="content">
              <div className="summary center aligned">
                 <a href={"https://github.com/" + props.slug + "/pulls/"} target="_blank" rel="noopener noreferrer">{props.number_of_prs}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default RepoItem
