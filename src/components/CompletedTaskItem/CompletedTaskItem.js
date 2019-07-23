import React, { Component } from 'react'

export default class CompletedTaskItem extends Component {
  render() {
    return (
      <tr>
      <td className="center">&nbsp;</td>
      <td><span className="completed-task-name">{this.props.taskname}</span></td>
      <td>{this.props.taskduedate ? this.props.taskduedate.split("T")[0] : ''}</td>
      </tr>
    )
  }
}