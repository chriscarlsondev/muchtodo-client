import React, { Component } from 'react'
import './IncompleteTaskItem.css'

export default class TaskItem extends Component {
  render() {
    return <>
            <input type="checkbox" name="task1" id="task1" />
            <label htmlFor="task1">Task #1</label> | Category 1, Category 2<br />
    </>
  }
}
