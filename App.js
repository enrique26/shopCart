/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ShopingCart from './ShopingCart';
import { Provider } from 'react-redux';

///persist redux
import { PersistGate } from 'redux-persist/integration/react'
// import store from './store';
import persist from './store';


let persistStore = persist();

export default class App extends Component<Props> {
  render() {
    return (
      <PersistGate loading={<Text>Loading</Text>} persistor={persistStore.persistor}>
        <Provider store={persistStore.store}>
          <ShopingCart/>
        </Provider>
      </PersistGate>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
