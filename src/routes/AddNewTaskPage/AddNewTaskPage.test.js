import React from 'react';
import ReactDOM from 'react-dom';
import AddNewTaskPage from './AddNewTaskPage';
import { BrowserRouter } from 'react-router-dom'

it('AddNewTaskPage renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AddNewTaskPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});