import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

export default class Navigation extends Component {
  render() {
      return <>
        <p>
          <Link to='/'>Intro</Link> &#8226; <Link to='/home'>Home</Link> &#8226; <Link to='/addnewtask'>Add Task</Link> &#8226; <Link to='/addnewcategory'>Add Category</Link></p>
    </>
  }
}
