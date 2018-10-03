import { combineReducers } from 'redux';
import boxReducer from './boxReducer';
import viewReducer from './viewReducer';
import storeReducer from './storeReducer';
import userReducer from './userReducer';

export default combineReducers({
  container: boxReducer,
  nav: viewReducer,
  storeView: storeReducer,
  user: userReducer
});