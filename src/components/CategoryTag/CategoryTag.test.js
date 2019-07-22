import React from 'react';
import ReactDOM from 'react-dom';
import CategoryTag from './CategoryTag';

it('CategoryTag renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CategoryTag />, div);
  ReactDOM.unmountComponentAtNode(div);
});