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
          <table>
            <thead>
              <tr>
              <th className="check-col">&nbsp;</th>
              <th className="task-col">Task</th>
              <th className="duedate-col">Due Date</th>
              <th className="category-col">Category</th>
            </tr>
            </thead>
            <tbody>
        {incompleteTaskList.map((task, i) =>
            <IncompleteTaskItem
            key={i}
              {...task}
            />
              )}
            </tbody>
          </table>
        </section>
        <section>
              <header>
                  <h2>Completed Tasks</h2>
              </header>
              <table>
            <thead>
              <tr>
              <th className="check-col">&nbsp;</th>
              <th className="task-col">Task</th>
              <th className="duedate-col">Due Date</th>
              <th className="category-col">Category</th>
            </tr>
            </thead>
            <tbody>
            {completedTaskList.map((task, i) =>
              <CompletedTaskItem
                key={i}
                    {...task}
                    />
                )}
            </tbody>
          </table>
        </section>
    </>
  }
}
