import React, { Component } from 'react'
import './AddCategoryForm.css'

export default class AddCategoryForm extends Component {
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
            <button type="submit">Add Category</button>
          </div>
              </form>
              </section>
    </>
  }
}
