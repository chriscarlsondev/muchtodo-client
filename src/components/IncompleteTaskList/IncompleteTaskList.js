import React, { Component } from 'react'
import './IncompleteTaskList.css'
import IncompleteTaskItem from '../IncompleteTaskItem/IncompleteTaskItem'

export default class IncompleteTaskList extends Component {
  render() {
      return <>
        <form id="incomplete-task-list">
            <IncompleteTaskItem />
        </form>
    </>
  }
}
