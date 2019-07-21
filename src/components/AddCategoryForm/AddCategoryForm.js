import React, { Component } from 'react'
import './AddCategoryForm.css'
import MuchToDoContext from '../../MuchToDoContext';

export default class AddCategoryForm extends Component {

  constructor(props) {
    super(props)
  }
  static contextType = MuchToDoContext;

  handleSubmit = e => {
    e.preventDefault();
    const category = {
      categoryName: e.target.description.value
    }
    this.context.handleAddCategory(category);
    this.props.history.push('/home');
  }

  handleClickCancel = () => {
    this.props.history.push('/home')
  };

  render() {
      return <>
          <section>
          <header>
            <h2>Add New Category</h2>
        </header>
         <form id="add-new-category" onSubmit={this.handleSubmit}>
          <div className="form-section">
            <label htmlFor="category-name">Category Name:</label>
            <input type="text" id='description' name='description' placeholder="Personal" required />
          </div>
          <div className="form-section">
            <button type="submit">Add Category</button> <button type="button" onClick={this.handleClickCancel}>Cancel</button>
          </div>
              </form>
              </section>
    </>
  }
}
