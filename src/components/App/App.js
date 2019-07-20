import React from 'react';
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

function App() {
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
  );
}

export default App;