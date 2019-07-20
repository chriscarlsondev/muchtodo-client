import React from 'react';
import ReactDOM from 'react-dom';
import AddNewTaskPage from './AddNewTaskPage';

it('AddNewTaskPage renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddNewTaskPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});