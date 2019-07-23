import React, { Component } from 'react'
import CategoryList from '../CategoryList/CategoryList'
import MuchToDoContext from '../../MuchToDoContext';

export default class TaskList extends Component {
  static defaultProps = {
    Tasks: [],
    Categories: []
  };
  
  static contextType = MuchToDoContext;

  render() {
    const { Categories } = this.context
      return <>
          {Categories.map((category, i) =>
    <CategoryList
      key={i}
      {...category}
            />)}
    </>
  }
}
