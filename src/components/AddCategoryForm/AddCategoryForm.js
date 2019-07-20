import React, { Component } from 'react'
import './AddCategoryForm.css'
import LinkButton from '../LinkButton/LinkButton'
import MuchToDoContext from '../../MuchToDoContext';
export default class AddCategoryForm extends Component {
  static contextType = MuchToDoContext;

  render() {
      return <>
          <section>
          <header>
            <h2>Add New Category</h2>
        </header>
         <form id="add-new-category">
          <div className="form-section">
            <label htmlFor="category-name">Category Name:</label>
            <input type="text" id="category-name" name="category-name" placeholder="Personal" required />
          </div>
          <div className="form-section">
            <button type="submit">Add Category</button> <LinkButton to='/home'>Cancel</LinkButton>
          </div>
              </form>
              </section>
    </>
  }
}
