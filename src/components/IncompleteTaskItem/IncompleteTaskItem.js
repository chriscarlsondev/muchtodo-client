import React, { Component } from 'react'
import CategoryTag from '../CategoryTag/CategoryTag'
import './IncompleteTaskItem.css'
import MuchToDoContext from '../../MuchToDoContext';


export default class IncompleteTaskItem extends Component {
  static contextType = MuchToDoContext;

  render() {
    return <>
      <input type="checkbox" id={this.props.id} onChange={this.context.handleMarkTaskComplete.bind(this, this.props.id)} />
      {' '}
      {this.props.taskname} | <CategoryTag taskcategory={this.props.taskcategory} /> | Due Date: {this.props.taskduedate ? this.props.taskduedate.split("T")[0]: 'None'}<br />
    </>
  }
}