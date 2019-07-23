import React, { Component } from 'react'
import IncompleteTaskItem from '../IncompleteTaskItem/IncompleteTaskItem'
import CompletedTaskItem from '../CompletedTaskItem/CompletedTaskItem'
import MuchToDoContext from '../../MuchToDoContext';

export default class TaskList extends Component {
  static defaultProps = {
    Tasks: [],
    Categories: []
  };
  
  static contextType = MuchToDoContext;

  render() {
    const { Tasks } = this.context
    let incompleteTaskList = Tasks.filter(task => task.taskstatus === 'I');
    let completedTaskList = Tasks.filter(task => task.taskstatus === 'C');
      return <>
          <section>
              <header>
                  <h2>Incomplete Tasks</h2>
              </header>
        {incompleteTaskList.map((task, i) =>
            <IncompleteTaskItem
            key={i}
              {...task}
            />
              )}
        </section>
        <section>
              <header>
                  <h2>Completed Tasks</h2>
              </header>
              <ul>
            {completedTaskList.map((task, i) =>
              <CompletedTaskItem
                key={i}
                    {...task}
                    />
                )}
              </ul>
        </section>
    </>
  }
}
