import React from 'react';
import { Provider } from 'react-redux';
import Nav from "./src/components/Nav";
import Container from "./src/components/Container";
import { View, Text } from 'react-native';


import store from './store.js';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
        { <View>{this.props.navActive ? <Nav/> : null}<Container/></View> }
        </View>
      </Provider>
    );
  }
}