import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

export default class Navigation extends Component {
  render() {
      return <>
          <p><Link to='/home'>Home</Link></p>
    </>
  }
}
