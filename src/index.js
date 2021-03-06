import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { hashHistory } from 'react-router';

ReactDOM.render(<App history={hashHistory} />, document.getElementById('root'));
registerServiceWorker();
