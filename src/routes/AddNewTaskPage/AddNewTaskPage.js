import React, { Component } from 'react'
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm'

export default class AddNewTaskPage extends Component {
  render() {
    return <>
      <AddTaskForm history={this.props.history} />
    </>
  }
}
