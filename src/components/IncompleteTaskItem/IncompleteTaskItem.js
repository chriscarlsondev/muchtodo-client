import React, { Component } from 'react'
import CategoryTag from '../CategoryTag/CategoryTag'
import './IncompleteTaskItem.css'

export default class TaskItem extends Component {
  render() {
    return <>
            <input type="checkbox" id={this.props.id} />
            <label htmlFor={this.props.id}>{this.props.taskName}</label> |  <CategoryTag categoryId={this.props.taskCategory} /><br />
    </>
  }
}
