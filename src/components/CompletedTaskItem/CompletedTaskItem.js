import React, { Component } from 'react'
import CategoryTag from '../CategoryTag/CategoryTag'
import './CompletedTaskItem.css'

export default class CompletedTaskItem extends Component {
  render() {
    return <>
      <p><span className="completed-task-name">{this.props.taskName}</span> | <CategoryTag categoryId={this.props.taskCategory} /></p>
    </>
  }
}