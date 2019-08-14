/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import HomeScreen from './containers/HomeScreen';
import ElectronicsScreen from './containers/ElectronicsScreen';
import BooksScreen from './containers/BooksScreen';
import {createStackNavigator} from 'react-navigation';
import ShoppingCartIcon from './containers/ShopingCartIcon';
import CartScreen from './containers/CartScreen';


export default class ShopingCart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppStackNavigator></AppStackNavigator>
      </View>
    );
  }
}


const AppStackNavigator=createStackNavigator({
  Home:{screen:HomeScreen},
  Electronics:{screen:ElectronicsScreen},
  Books:{screen:BooksScreen},
  Cart: CartScreen
},{
  initialRouteName:"Home",
  navigationOptions:{
    title:"Shopping cart",
    headerRight:(
      <ShoppingCartIcon/>
    )
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
