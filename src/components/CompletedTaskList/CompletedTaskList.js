import React, { Component } from 'react'
import './CompletedTaskList.css'
import CompletedTaskItem from '../CompletedTaskItem/CompletedTaskItem'

export default class CompletedTaskList extends Component {
  render() {
      return <>
          <CompletedTaskItem />
    </>
  }
}
