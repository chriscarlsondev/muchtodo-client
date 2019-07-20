import React, { Component } from 'react'
import './CompletedTaskItem.css'

export default class CompletedTaskItem extends Component {
  render() {
    return <>
        <p><span className="completed-task-name">{this.props.taskName}</span> | {this.props.taskCategory}</p>
    </>
  }
}