import React from 'react';
import ReactDOM from 'react-dom';
import AddCategoryForm from './AddCategoryForm';

it('AddCategoryForm renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddCategoryForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});