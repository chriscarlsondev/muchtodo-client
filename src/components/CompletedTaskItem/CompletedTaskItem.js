import React, { Component } from 'react'
import CategoryTag from '../CategoryTag/CategoryTag'
import './CompletedTaskItem.css'

export default class CompletedTaskItem extends Component {
  render() {
    return <>
      <li><span className="completed-task-name">{this.props.taskname}</span>  | <CategoryTag taskcategory={this.props.taskcategory} /> | Due Date: {this.props.taskduedate ? this.props.taskduedate : 'None'}</li>
    </>
  }
}