import React, { Component } from 'react'
import './AddTaskForm.css'
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
            <h2>Add New Task</h2>
        </header>
         <form id="add-new-task" onSubmit={this.handleSubmit}>
          <div className="form-section">
            <h3>Task Name</h3>
            <input type="text" name="taskname" placeholder="Schedule a doctor's appointment" required />
            </div>
            <div className="form-section">
              <h3>Task Categories (Optional)</h3>
              {this.context.Categories.map((cat, i) => <section key={i}><label htmlFor={cat.id} key={i}><input type="radio" name="taskcategory" value={cat.id} id={cat.id} key={i}/> {cat.categoryname}</label><br /></section>)}
            <Link to="/addnewcategory">+ Add New Category</Link>
          </div>
          <div className="form-section">
            <h3>Due Date (Optional)</h3>
            <label htmlFor="taskduedate">Due Date:</label> <input type="date" name="taskduedate" id="taskduedate" />
          </div>
          <div className="form-section">
              <button type="submit">Add Task</button> <button type="button" onClick={this.handleClickCancel}>Cancel</button>
          </div>
          </form>
      </section>
    </>
  }
}