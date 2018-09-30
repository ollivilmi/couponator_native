import React from 'react';
import { Provider } from 'react-redux';
import Nav from "./src/components/Nav";
import Container from "./src/components/Container";
import { View } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import rootReducer from './src/reducers';


const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
}

