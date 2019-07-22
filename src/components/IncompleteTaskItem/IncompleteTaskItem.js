import React, { Component } from 'react'
import CategoryTag from '../CategoryTag/CategoryTag'
import './IncompleteTaskItem.css'
import MuchToDoContext from '../../MuchToDoContext';


export default class TaskItem extends Component {
  static contextType = MuchToDoContext;

  render() {
    const currentId = this.props.id;
    return <>
      <input type="checkbox" id={currentId} onChange={this.context.handleMarkTaskComplete.bind(this, currentId)} />
      {' '}
      {this.props.taskname} | <CategoryTag taskcategory={this.props.taskcategory} /> | Due Date: {this.props.taskduedate ? this.props.taskduedate : 'None'}<br />
    </>
  }
}