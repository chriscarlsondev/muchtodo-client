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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      IncompleteTasks: [
        {
          id: '1',
          taskName: 'Task #1',
          taskDueDate: '07/20/2019',
          taskCategory: '0'
        },
        {
          id: '2',
          taskName: 'Task #2',
          taskDueDate: '07/01/2019',
          taskCategory: '1'
        },
        {
          id: '3',
          taskName: 'Task #3',
          taskDueDate: '',
          taskCategory: ''
        },
        {
          id: '7',
          taskName: 'Task #7',
          taskDueDate: '1/1/2019',
          taskCategory: '1'
        }
      ],
      CompletedTasks: [
        {
          id: '4',
          taskName: 'Task #4',
          taskDueDate: '',
          taskCategory: '1'
        },
        {
          id: '5',
          taskName: 'Task #5',
          taskDueDate: '',
          taskCategory: ''
        },
        {
          id: '6',
          taskName: 'Task #6',
          taskDueDate: '',
          taskCategory: ''
        }
      ],
      Categories: [
        {
          id: '0',
          categoryName: 'Personal'
        },
        {
          id: '1',
          categoryName: 'Work'
        }
      ]
    }
  }

  // Add Task
  handleAddTask = (newTask) => {
    let newIncompleteTasksList = this.state.IncompleteTasks;
    newIncompleteTasksList.push(newTask);
    this.setState({
      IncompleteTasks: newIncompleteTasksList
    })
  }

  // Add New Category
  handleAddCategory = (newCategory) => {
    let newCategories = this.state.Categories;
    newCategory.id = this.state.Categories.length+1;
    console.log(newCategory);
    newCategories.push(newCategory);
    this.setState({
      Categories: newCategories
    })
  }

  // Mark Task Complete
  handleMarkTaskComplete = (completedTask) => {
    let newIncompleteTasksList = this.state.IncompleteTasks.filter(task => task.id !== completedTask.id);
    let newCompletedTasksList = this.state.CompletedTasks.push(completedTask);
    this.setState({
      IncompleteTasks: newIncompleteTasksList,
      CompletedTasks: newCompletedTasksList
    })
  }

  render() {
    const contextValue = {
      IncompleteTasks: this.state.IncompleteTasks,
      CompletedTasks: this.state.CompletedTasks,
      Categories: this.state.Categories,
      handleAddTask: this.handleAddTask,
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