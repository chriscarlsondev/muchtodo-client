import React, { Component } from 'react'
import './IncompleteTaskList.css'
import IncompleteTaskItem from '../IncompleteTaskItem/IncompleteTaskItem'
import MuchToDoContext from '../../MuchToDoContext';

export default class IncompleteTaskList extends Component {
  static contextType = MuchToDoContext;

  render() {
    const { IncompleteTasks } = this.context
      return <>
        <form id="incomplete-task-list">
        {IncompleteTasks.map(task =>
            <IncompleteTaskItem
              key={task.id}
              {...task}
            />
          )}
        </form>
    </>
  }
}
