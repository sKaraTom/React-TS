import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import { Hello } from './Hello';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
