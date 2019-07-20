import React, { Component } from 'react'

export default class LandingPage extends Component {
  render() {
    return <>
        <section className="landing-page-section">
        <header>
            <h3>Easily add new tasks</h3>
        </header>
        <p>[<em>placeholder for screenshot of new task page interface</em>]</p>
        <p>MuchToDo allows you to quickly add new tasks.</p>
        </section>
        <section className="landing-page-section">
        <header>
            <h3>Create your own custom categories</h3>
        </header>
        <p>[<em>placeholder for screenshot of add new category page interface</em>]</p>
        <p>Keep your tasks well organized by creating custom categories.</p>
        </section>
        <section className="landing-page-section">
        <header>
            <h3>Assign an optional due date</h3>
        </header>
        <p>[<em>placeholder for screenshot of adding a to do with a due date or due date being displayed for a task</em>]</p>
        <p>Assign a due date to your task to ensure tasks are completed on time</p>
        </section>
        <section className="landing-page-section">
        <header>
            <h3>Get Started Now. There's Much To Do.</h3>
        </header>
        <form className='get-started'>
            <button type='submit'>Get Started</button>
        </form>
        </section>
    </>
  }
}


