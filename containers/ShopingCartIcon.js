/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Icon} from 'native-base';
import {connect} from 'react-redux';
import { withNavigation } from 'react-navigation'

const ShoppingCartIcon = props => (
  <View style={{padding:5}}>
    <View style={{ position:'absolute',height:30,width:30,
    borderRadius:15,backgroundColor:'green',right:15,bottom:15,alignItems:'center',justifyContent:'center',zIndex:2000}}>
      <Text style={{color:'white',fontWeight:'bold'}}>{props.cartItems.length}</Text>
    </View>

    <Icon name='shopping-cart' type="FontAwesome" onPress={() => props.navigation.navigate('Cart')}/>

  </View>
)

const mapStateToProsp= (state) => {
    return {
      cartItems:state
    }
}

export default connect(mapStateToProsp)(withNavigation(ShoppingCartIcon));
