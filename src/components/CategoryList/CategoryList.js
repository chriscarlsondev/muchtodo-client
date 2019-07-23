import React, { Component } from 'react'
import MuchToDoContext from '../../MuchToDoContext';
import IncompleteTaskItem from '../IncompleteTaskItem/IncompleteTaskItem'
import CompletedTaskItem from '../CompletedTaskItem/CompletedTaskItem'


export default class CategoryList extends Component {
  static contextType = MuchToDoContext;
    static defaultProps = {
        Tasks: []
    }
    render() {
        const { Tasks } = this.context
        let incompleteCategoryTaskList = Tasks.filter(task => task.taskstatus === 'I' && task.taskcategory === this.props.id);
        let completedCategoryTaskList = Tasks.filter(task => task.taskstatus === 'C' && task.taskcategory === this.props.id);
        return <>
            <h2>{this.props.categoryname}</h2>
            <table>
             <thead>
               <tr>
               <th className="check-col">&nbsp;</th>
               <th className="task-col">Task</th>
               <th className="duedate-col">Due Date</th>
             </tr>
             </thead>
             <tbody>
         {incompleteCategoryTaskList.map((task, i) =>
             <IncompleteTaskItem
             key={i}
               {...task}
             />
               )}
         {completedCategoryTaskList.map((task, i) =>
             <CompletedTaskItem
             key={i}
               {...task}
             />
               )}
             </tbody>
          </table>
          
    </>
  }
}