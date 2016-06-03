import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import DevTools from '../containers/DevTools';

/**
 * Entirely optional, this tiny library adds some functionality to
 * your DevTools, by logging actions/state to your console. Used in
 * conjunction with your standard DevTools monitor gives you great
 * flexibility!
 */
const logger = createLogger();


// createStore 的参数
//  createStore(reducer, [initialState], [enhancer])

//  这里的applyMiddleware之类的 都是 enhancer
//  const store = createStore(
//   reducer,
//   compose(
//     applyMiddleware(thunk),
//     DevTools.instrument()
//   )
// )

// 下面这样写是为了把 createStore 包装成 finalCreateStore，用于调用
const finalCreateStore = compose(
  // Middleware you want to use in development:
  applyMiddleware(logger, thunk),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)(createStore);



module.exports = function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
};



