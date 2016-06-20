import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import { configureStore } from './store/configureStore';
import { Provider } from 'react-redux'
import App from './containers/App';
// import { Root } from './containers/Root';


/**
 * Import the stylesheet you want used! Here we just reference
 * the main SCSS file we have in the styles directory.
 */
// import './styles/main.scss';


let store = configureStore();

render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

  // <Provider store={store}>
  //   <Router routes={routes} history={browserHistory}/>
  // </Provider>,