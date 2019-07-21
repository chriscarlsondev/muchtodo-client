import React, { Component } from 'react'
import AddCategoryForm from '../../components/AddCategoryForm/AddCategoryForm'

export default class AddNewCategoryPage extends Component {
  render() {
    return <>
      <AddCategoryForm history={this.props.history}/>
    </>
  }
}
