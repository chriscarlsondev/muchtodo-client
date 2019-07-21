import React, { Component } from 'react'
import CategoryTag from '../CategoryTag/CategoryTag'
import './IncompleteTaskItem.css'
import MuchToDoContext from '../../MuchToDoContext';


export default class TaskItem extends Component {
  static contextType = MuchToDoContext;

  handleMarkTaskComplete = id => {
    this.context.handleMarkTaskComplete(id);
  }

  render() {
    return <>
      <input type="checkbox" id={this.props.id} />
      <label htmlFor={this.props.id}>{this.props.taskName}</label> <CategoryTag categoryId={this.props.taskCategory} /><br />
    </>
  }
}
