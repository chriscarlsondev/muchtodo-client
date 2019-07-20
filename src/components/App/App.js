import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import LandingPage from '../../routes/LandingPage/LandingPage'
import HomePage from '../../routes/HomePage/HomePage'
import AddNewTaskPage from '../../routes/AddNewTaskPage/AddNewTaskPage'
import AddNewCategoryPage from '../../routes/AddNewCategoryPage/AddNewCategoryPage'
import { Route, Switch } from 'react-router-dom'
import './Normalize.css'
import './App.css'

class App extends Component {
  state = {
    IncompleteTasks: [
      {
        id: '1',
        taskName: 'Task #1',
        taskDueDate: '07/20/2019',
        category: 1
      },
      {
        id: '1',
        taskName: 'Example',
        taskDueDate: '07/01/2019',
        category: 1
      },
      {
        id: '3',
        taskName: 'Task #3',
        taskDueDate: '',
        category: ''
      }
    ],
    CompletedTasks: [
      {
        id: '4',
        taskName: 'Task #4',
        taskDueDate: '',
        category: 2
      },
      {
        id: '5',
        taskName: 'Task #5',
        taskDueDate: '',
        category: ''
      },
      {
        id: '6',
        taskName: 'Task #6',
        taskDueDate: '',
        category: ''
      }
    ],
    Categories: [
      {
        id: '1',
        categoryName: 'Personal'
      },
      {
        id: '2',
        categoryName: 'Work'
      }
    ]
  }

  // Add Task
  addTask = (newTask) => {
    let newIncompleteTasksList = this.state.IncompleteTasks;
    newIncompleteTasksList.push(newTask);
    this.setState({
      IncompleteTasks: newIncompleteTasksList
    })
  }

  // Add Category
  addCategory = (newCategory) => {
    let newCategories = this.state.Categories;
    newCategories.push(newCategory);
    this.setState({
      Categories: newCategories
    })
  }

  markTaskComplete = (completedTask) => {
    let newIncompleteTasksList = this.state.IncompleteTasks.filter(task => task.id !== completedTask.id);
    let newCompletedTasksList = this.state.CompletedTasks.push(completedTask);
    this.setState({
      IncompleteTasks: newIncompleteTasksList,
      CompletedTasks: newCompletedTasksList
    })
  }

  render() {
    return (
      <>
        <nav role="navigation">
          <Navigation />
        </nav>
        <main role="main">
          <header role="banner">
            <Header />
          </header>
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route
              exact
              path={'/home'}
              component={HomePage}
            />
            <Route
              exact
              path={'/addnewtask'}
              component={AddNewTaskPage}
            />
            <Route
              exact
              path={'/addnewcategory'}
              component={AddNewCategoryPage}
            />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    )
  }
}

export default App;