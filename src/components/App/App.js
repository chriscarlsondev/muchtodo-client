import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import LandingPage from '../../routes/LandingPage/LandingPage'
import HomePage from '../../routes/HomePage/HomePage'
import AddNewTaskPage from '../../routes/AddNewTaskPage/AddNewTaskPage'
import AddNewCategoryPage from '../../routes/AddNewCategoryPage/AddNewCategoryPage'
import { Route, Switch } from 'react-router-dom'
import MuchToDoContext from '../../MuchToDoContext';
import './Normalize.css'
import config from '../../config';
import './App.css'

class App extends Component {
  state = {
    Tasks: [],
    Categories: []
  }

  setTasks = Tasks => {
    this.setState({
      Tasks
    })
  }

  setCategories = Categories => {
    this.setState({
      Categories
    })
  }

  componentDidMount() {
    fetch(config.TASKS_API_ENDPOINT, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(this.setTasks)
      .catch(error => {
        console.error(error)
        this.setState({ error })
      })
      fetch(config.CATEGORIES_API_ENDPOINT, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${config.API_KEY}`
        }
      })
        .then(res => {
          if (!res.ok) {
            return res.json().then(error => Promise.reject(error))
          }
          return res.json()
        })
        .then(this.setCategories)
        .catch(error => {
          console.error(error)
          this.setState({ error })
        })
  }

  // Add Incomplete Task
  handleAddNewIncompleteTask = (newTask) => {
    fetch(config.TASKS_API_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(newTask),
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${config.API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(data => {
        let currentTasks = this.state.Tasks;
        newTask.id = currentTasks.length;
        currentTasks.push(newTask);
        this.setState({
          Tasks: currentTasks
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  // Add New Category
  handleAddCategory = (newCategory) => {
    fetch(config.CATEGORIES_API_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(newCategory),
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${config.API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(data => {
        let newCategories = this.state.Categories;
        newCategory.id = this.state.Categories.length+1;
        newCategories.push(newCategory);
        this.setState({
          Categories: newCategories
        })
      })
      .catch(error => {
        console.error(error)
      })
    

  }

  // Mark Task Complete
  handleMarkTaskComplete = (completedTaskId) => {
    fetch(config.TASKS_API_ENDPOINT + `${completedTaskId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${config.API_KEY}`
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(error => Promise.reject(error))
      })
      .then(() => {
        let currentTasks = this.state.Tasks;
        let taskToUpdate = currentTasks.findIndex(i => i.id === completedTaskId);
        currentTasks[taskToUpdate].taskstatus = 'C';
          this.setState({
            Tasks: currentTasks
          })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    const contextValue = {
      Tasks: this.state.Tasks,
      Categories: this.state.Categories,
      handleAddNewIncompleteTask: this.handleAddNewIncompleteTask,
      handleAddCategory: this.handleAddCategory,
      handleMarkTaskComplete: this.handleMarkTaskComplete,
    }
    return (
      <>
        <MuchToDoContext.Provider value={contextValue}>
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
          </MuchToDoContext.Provider>
      </>
    )
  }
}

export default App;