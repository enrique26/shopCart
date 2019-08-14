/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default class Products extends Component {

  renderProducts(products){
    return products.map( (item,index)=>(
      <View key={index} style={{padding:20}}>
        <Button onPress={()=> this.props.onPress(item)} title={item.name+" - "+item.price}></Button>
      </View>
    ) )
  }

  render() {

    return (
      <View style={styles.container}>
          {this.renderProducts(this.props.products)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  }
});
