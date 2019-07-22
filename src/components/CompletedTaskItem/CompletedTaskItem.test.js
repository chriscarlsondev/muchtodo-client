import React from 'react';
import ReactDOM from 'react-dom';
import CompletedTaskItem from './CompletedTaskItem';

it('CompletedTaskItem renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompletedTaskItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});