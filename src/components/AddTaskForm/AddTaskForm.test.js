import React from 'react';
import ReactDOM from 'react-dom';
import AddTaskForm from './AddTaskForm';
import { BrowserRouter } from 'react-router-dom'

it('AddTaskForm renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AddTaskForm /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});