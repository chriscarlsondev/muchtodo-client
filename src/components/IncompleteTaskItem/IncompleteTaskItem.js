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
      <label htmlFor={this.props.id}>{this.props.taskName}</label> | <CategoryTag categoryId={this.props.taskCategory} /> | Due Date: {this.props.taskDueDate ? this.props.taskDueDate : 'None'}<br />
    </>
  }
}