import React, { Component } from 'react'
import './AddTaskForm.css'
import { Link } from 'react-router-dom'
import LinkButton from '../LinkButton/LinkButton'
import MuchToDoContext from '../../MuchToDoContext';

export default class AddTaskForm extends Component {

  static contextType = MuchToDoContext;

  render() {
      return <>
         <section>
        <header>
            <h2>Add New Task</h2>
        </header>
         <form id="add-new-task">
          <div className="form-section">
            <h3>Task Name</h3>
            <input type="text" name="task-title" placeholder="Schedule a doctor's appointment" required />
          </div>
          <div className="form-section">
            <h3>Task Categories (Optional)</h3>
            <input type="checkbox" name="categories" id="cat1" />
            <label htmlFor="cat1">Category 1</label><br />
            <input type="checkbox" name="categories" id="cat2" />
            <label htmlFor="cat2">Category 2</label><br />
            <Link to='/addnewcategory'>+ Add New Category</Link>
          </div>
          <div className="form-section">
            <h3>Due Date (Optional)</h3>
            <label htmlFor="task-due-date">Due Date:</label>
            <input type="date" name="task-due-date" id="task-due-date" />
          </div>
          <div className="form-section">
              <button type="submit">Add Task</button> <LinkButton to='/home'>Cancel</LinkButton>
          </div>
          </form>
      </section>
    </>
  }
}
