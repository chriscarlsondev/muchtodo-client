import React from 'react';
import ReactDOM from 'react-dom';
import AddNewCategoryPage from './AddNewCategoryPage';

it('AddNewCategoryPage renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddNewCategoryPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});