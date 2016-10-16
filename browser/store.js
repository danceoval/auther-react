import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger'; 
import thunk from 'redux-thunk';
import rootReducer from './ducks';

export default createStore(
  rootReducer,
  applyMiddleware(thunk, createLogger())
);