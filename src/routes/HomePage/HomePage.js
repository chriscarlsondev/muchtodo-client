import React, { Component } from 'react'
import LinkButton from '../../components/LinkButton/LinkButton'
import IncompleteTaskList from '../../components/IncompleteTaskList/IncompleteTaskList'
import CompletedTaskList from '../../components/CompletedTaskList/CompletedTaskList'

export default class HomePage extends Component {
  render() {
    return <>
      <section>
        <LinkButton to='/addnewtask'>+ Add Task</LinkButton>
        <LinkButton to='/addnewcategory'>+ Add New Category</LinkButton>
      </section>
      <section>
        <header>
            <h2>Incomplete Tasks</h2>
        </header>
        <IncompleteTaskList />
      </section>
      <section>
        <header>
          <h2>Completed Tasks</h2>
        </header>
        <CompletedTaskList />
      </section>
    </>
  }
}
