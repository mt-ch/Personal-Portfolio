import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './functions/scrollToTop';

ReactDOM.render(
  <Router>
    <ScrollToTop/>
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.register();
