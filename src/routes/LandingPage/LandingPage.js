import React, { Component } from 'react'
import LinkButton from '../../components/LinkButton/LinkButton'
export default class LandingPage extends Component {
  render() {
      return <>
        <section className="landing-page-section">
        <header>
            <h2>Easily add new tasks</h2>
        </header>
        <p>[<em>placeholder for screenshot of new task page interface</em>]</p>
        <p>MuchToDo allows you to quickly add new tasks.</p>
        </section>
        <section className="landing-page-section">
        <header>
            <h2>Create your own custom categories</h2>
        </header>
        <p>[<em>placeholder for screenshot of add new category page interface</em>]</p>
        <p>Keep your tasks well organized by creating custom categories.</p>
        </section>
        <section className="landing-page-section">
        <header>
            <h2>Assign an optional due date</h2>
        </header>
        <p>[<em>placeholder for screenshot of adding a to do with a due date or due date being displayed for a task</em>]</p>
        <p>Assign a due date to your task to ensure tasks are completed on time</p>
        </section>
        <section className="landing-page-section">
        <header>
            <h2>Get Started Now. There's MuchToDo.</h2>
        </header>
        <LinkButton to='/home'>Get Started</LinkButton>
              </section>
    </>
  }
}


