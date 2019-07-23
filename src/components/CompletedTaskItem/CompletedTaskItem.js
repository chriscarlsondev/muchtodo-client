import React, { Component } from 'react'
import CategoryTag from '../CategoryTag/CategoryTag'

export default class CompletedTaskItem extends Component {
  render() {
    return (
      <tr>
      <td>&nbsp;</td>
      <td><span className="completed-task-name">{this.props.taskname}</span></td>
      <td>{this.props.taskduedate ? this.props.taskduedate.split("T")[0] : ''}</td>
        <td><CategoryTag taskcategory={this.props.taskcategory} /></td>
      </tr>
    )
  }
}