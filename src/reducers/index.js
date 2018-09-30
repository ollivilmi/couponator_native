import { combineReducers } from 'redux';
import boxReducer from './boxReducer';
import viewReducer from './viewReducer';
import storeReducer from './storeReducer';

export default combineReducers({
  container: boxReducer,
  nav: viewReducer,
  storeView: storeReducer
});