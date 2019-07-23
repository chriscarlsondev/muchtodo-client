import React, { Component } from 'react'
import LinkButton from '../../components/LinkButton/LinkButton'
import HomepageScreenshot from './homepage-screenshot.png'
import AddTaskScreenshot from './addtask-screenshot.png'
import AddCategoryScreenshot from './addcategory-screenshot.png'

export default class LandingPage extends Component {
  render() {
      return <>
        <section className="landing-page-section">
        <header>
            <h2>Easily add new tasks</h2>
        </header>
        <p><img src={AddTaskScreenshot} className="screenshot" alt="Screenshot of Add Task page" /></p>
        <p>MuchToDo allows you to quickly add new tasks.</p>
        </section>
        <section className="landing-page-section">
        <header>
            <h2>Create your own custom categories</h2>
        </header>
        <p><img src={AddCategoryScreenshot} className="screenshot" alt="Screenshot of Add Category page" /></p>
        <p>Keep your tasks well organized by creating custom categories.</p>
        </section>
        <section className="landing-page-section">
        <header>
            <h2>Assign an optional due date</h2>
        </header>
        <p><img src={HomepageScreenshot} className="screenshot" alt="Screenshot of Homepage with due dates" /></p>
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


