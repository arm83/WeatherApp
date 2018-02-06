import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home.js';
import Forecast from './components/Forecast.js'

import {Router, Route, browserHistory, IndexRoute} from 'react-router';

ReactDOM.render(
  <Router history = {browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>,

  document.getElementById('root'));
registerServiceWorker();
