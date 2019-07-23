import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header role="banner">
        <Link to="/home" className="logo"><h1>MuchToDo</h1></Link>
        <span>Spend less time tracking your to do's and more time getting them done.</span>
      </header>
    )
  }
}
