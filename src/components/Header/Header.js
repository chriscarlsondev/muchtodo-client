import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './muchtodo-logo.png'

export default class Header extends Component {
  render() {
    return (
      <>
      <nav>
        <Link to='/home'>Home</Link> &bull; <Link to='/addnewtask'>Add Task</Link> &bull; <Link to='/addnewcategory'>Add Category</Link> &bull; <Link to="/">About</Link>
      </nav>
      <header role="banner">
        <Link to="/home" className="logo-link"><img src={logo} alt="MuchToDo" className="logo" /></Link>
        <span>Spend less time tracking your to do's and more time getting them done.</span>
        </header>
      </>
    )
  }
}
