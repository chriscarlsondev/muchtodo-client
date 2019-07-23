import React, { Component } from 'react'
import MuchToDoContext from '../../MuchToDoContext';
import { Link } from 'react-router-dom'

export default class AddTaskForm extends Component {

  static contextType = MuchToDoContext;

  handleSubmit = e => {
    e.preventDefault();
    let newTask = {
      taskname: e.target.taskname.value,
      taskstatus: 'I',
      taskduedate: e.target.taskduedate.value,
      taskcategory: e.target.taskcategory.value
    }
    this.context.handleAddNewIncompleteTask(newTask);
    this.props.history.push('/home');
  }

  handleClickCancel = () => {
    this.props.history.push('/home')
  };
 
  render() {
      return <>
         <section>
        <header>
            <h2>Add Task</h2>
        </header>
         <form id="add-new-task" onSubmit={this.handleSubmit}>
          <div className="form-section">
            <label htmlFor="taskname">Task Name</label>
            <input type="text" id="taskname" name="taskname" placeholder="Schedule a doctor's appointment" required />
            </div>
            <div className="form-section">
              <p>Task Category <span className="optional">(Optional)</span></p>
              {this.context.Categories.map((cat, i) => <label htmlFor={cat.id} key={i}><input type="radio" name="taskcategory" value={cat.id} id={cat.id} key={i}/> {cat.categoryname}</label>)}
            <Link to="/addnewcategory">+ Add New Category</Link>
          </div>
          <div className="form-section">
            <label htmlFor="taskduedate">Due Date <span className="optional">(Optional)</span></label> <input type="date" name="taskduedate" id="taskduedate" />
          </div>
          <div className="form-section">
              <button type="submit">Add</button> <button type="button" onClick={this.handleClickCancel}>Cancel</button>
          </div>
          </form>
      </section>
    </>
  }
}