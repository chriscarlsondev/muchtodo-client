import React, { Component } from 'react'
import './IncompleteTaskItem.css'

export default class TaskItem extends Component {
  render() {
    return <>
            <input type="checkbox" id={this.props.id} />
            <label htmlFor={this.props.id}>{this.props.taskName}</label> | {this.props.taskCategory}<br />
    </>
  }
}
