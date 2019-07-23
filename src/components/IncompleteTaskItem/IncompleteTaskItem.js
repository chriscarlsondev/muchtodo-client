import React, { Component } from 'react'
import MuchToDoContext from '../../MuchToDoContext';


export default class IncompleteTaskItem extends Component {
  static contextType = MuchToDoContext;

  render() {
    return <>
      <tr>
        <td className="center"><input type="checkbox" id={this.props.id} onChange={this.context.handleMarkTaskComplete.bind(this, this.props.id)} /></td>
        <td>{this.props.taskname}</td>
        <td>{this.props.taskduedate ? this.props.taskduedate.split("T")[0] : ''}</td>
      </tr>
    </>
  }
}