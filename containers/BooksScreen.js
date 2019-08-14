/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {books} from '../Data';
import Products from '../components/Products';
import {connect} from 'react-redux';


class Books extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Products products={books} onPress={this.props.addItemToCart}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
});

const mapDispatchToProps = (dispatch) => {
  return{
    addItemToCart:(product) => dispatch({type:"ADD_TO_CART",payload:product})
  }
}


///para usarse con react navigation los elementos connect de react-redux debe pasarse como un componente nuevamente
////connect(state,props)(component)
let BooksScreen = connect(null,mapDispatchToProps)(Books)

export default () => (
  <BooksScreen />
);
