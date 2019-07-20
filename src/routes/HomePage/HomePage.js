import React, { Component } from 'react'
import IncompleteTaskList from '../../components/IncompleteTaskList/IncompleteTaskList'
import CompletedTaskList from '../../components/CompletedTaskList/CompletedTaskList'

export default class HomePage extends Component {
  render() {
    return <>
       <section>
        <button>+ Add Task</button>
        <button>+ Add Task Category</button>
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
