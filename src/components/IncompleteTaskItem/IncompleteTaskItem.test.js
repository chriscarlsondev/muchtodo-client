import React from 'react';
import ReactDOM from 'react-dom';
import IncompleteTaskItem from './IncompleteTaskItem';

it('IncompleteTaskItem renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IncompleteTaskItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});