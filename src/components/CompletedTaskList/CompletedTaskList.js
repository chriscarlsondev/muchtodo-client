import React, { Component } from 'react'
import './CompletedTaskList.css'
import CompletedTaskItem from '../CompletedTaskItem/CompletedTaskItem'
import MuchToDoContext from '../../MuchToDoContext';

export default class CompletedTaskList extends Component {
  static contextType = MuchToDoContext;

  render() {
    const { CompletedTasks } = this.context
    return(
      <ul>
          {CompletedTasks.map(task =>
            <CompletedTaskItem
              key={task.id}
              {...task}
            />
          )}
      </ul>
    )
  }
}
