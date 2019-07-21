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
      Tasks: [
        {
          id: 0,
          taskName: 'Task #1',
          taskDueDate: '2019-07-20',
          taskCategory: 0,
          taskStatus: 'I'
        },
        {
          id: 1,
          taskName: 'Task #2',
          taskDueDate: '2019-07-01',
          taskCategory: 1,
          taskStatus: 'I'
        },
        {
          id: 2,
          taskName: 'Task #3',
          taskDueDate: '',
          taskCategory: '',
          taskStatus: 'I'
        },
        {
          id: 3,
          taskName: 'Task #7',
          taskDueDate: '2019-01-01',
          taskCategory: 1,
          taskStatus: 'I'
        },
        {
          id: 4,
          taskName: 'Task #4',
          taskDueDate: '',
          taskCategory: 1,
          taskStatus: 'C'
        },
        {
          id: 5,
          taskName: 'Task #5',
          taskDueDate: '',
          taskCategory: '',
          taskStatus: 'C'
        },
        {
          id: 6,
          taskName: 'Task #6',
          taskDueDate: '',
          taskCategory: '',
          taskStatus: 'C'
        }
      ],
      Categories: [
        {
          id: 0,
          categoryName: 'Personal'
        },
        {
          id: 1,
          categoryName: 'Work'
        }
      ]
    }
  }

  // Add Incomplete Task
  handleAddNewIncompleteTask = (newTask) => {
    let currentTasks = this.state.Tasks;
    newTask.id = currentTasks.length;
    currentTasks.push(newTask);
    this.setState({
      Tasks: currentTasks
    })
  }

  // Add New Category
  handleAddCategory = (newCategory) => {
    let newCategories = this.state.Categories;
    newCategory.id = this.state.Categories.length+1;
    newCategories.push(newCategory);
    this.setState({
      Categories: newCategories
    })
  }

  // Mark Task Complete
  handleMarkTaskComplete = (completedTaskId) => {
    let currentTasks = this.state.Tasks;
    currentTasks[completedTaskId].taskStatus = 'C';
    this.setState({
      Tasks: currentTasks
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