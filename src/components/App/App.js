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
import './App.css'
import config from '../../config';

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

  getAllTasks = () => {
    fetch(config.API_BASE_URL+'tasks/', {
      method: 'GET'
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
      })
  }

  getAllCategories = () => {
    fetch(config.API_BASE_URL+'categories/', {
      method: 'GET'
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
      })
  }

  componentDidMount() {
    this.getAllTasks();
    this.getAllCategories();
  }

  // Add Incomplete Task
  handleAddNewIncompleteTask = (newTask) => {
    fetch(config.API_BASE_URL+'tasks/', {
      method: 'POST',
      body: JSON.stringify(newTask),
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error))
        }
        return res.json()
      }).then(data => {
          this.getAllTasks();
        }
      )
      .catch(error => {
        console.error(error)
      })
  }

  // Add New Category
  handleAddCategory = (newCategory) => {
    fetch(config.API_BASE_URL+'categories/', {
      method: 'POST',
      body: JSON.stringify(newCategory),
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(data => {
        this.getAllCategories();
      })
      .catch(error => {
        console.error(error)
      })
    

  }

  // Mark Task Complete
  handleMarkTaskComplete = (completedTaskId) => {
    fetch(config.API_BASE_URL+'tasks/'+completedTaskId, {
      method: 'PATCH'
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
    )
  }
}

export default App;