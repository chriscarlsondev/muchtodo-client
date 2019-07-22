import React from 'react';
import ReactDOM from 'react-dom';
import LinkButton from './LinkButton';
import { BrowserRouter } from 'react-router-dom'

it('LinkButton renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><LinkButton /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});