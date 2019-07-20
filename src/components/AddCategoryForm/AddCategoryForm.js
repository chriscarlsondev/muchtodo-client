import React, { Component } from 'react'
import './AddCategoryForm.css'

export default class AddCategoryForm extends Component {
  render() {
      return <>
         <form id="add-new-category">
          <div className="form-section">
            <h3>Add a New Category</h3>
            <label htmlFor="category-name">Category Name:</label>
            <input type="text" id="category-name" name="category-name" placeholder="Personal" required />
          </div>
          <div className="form-section">
            <button type="submit">Add Category</button>
          </div>
          </form>
    </>
  }
}
