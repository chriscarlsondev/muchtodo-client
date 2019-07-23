import React, { Component } from 'react'
import LinkButton from '../../components/LinkButton/LinkButton'
import TaskList from '../../components/TaskList/TaskList'
export default class HomePage extends Component {
  render() {
    return <>
      <section>
        <LinkButton to='/addnewtask'>Add Task</LinkButton>
        <LinkButton to='/addnewcategory'>Add New Category</LinkButton>
      </section>
        <TaskList />
    </>
  }
}