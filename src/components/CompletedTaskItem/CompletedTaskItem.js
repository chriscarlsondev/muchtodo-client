import React, { Component } from 'react'
import './CompletedTaskItem.css'

export default class CompletedTaskItem extends Component {
  render() {
    return <>
        <p><span className="completed-task-name">Task #4</span> | Category 2</p>
    </>
  }
}
