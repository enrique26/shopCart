/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Products from '../components/Products';
import {connect} from 'react-redux';

class Cart extends Component {
  render() {
    return (
      <View style={styles.container}>
        {
          this.props.cartItems.length > 0 && <Products products={this.props.cartItems} onPress={this.props.removeItem}/>
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProsp= (state) => {
    return {
      cartItems:state.cartItems
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem : (product) => dispatch({type:"REMOVE_FROM_CART",payload:product })
  }
}

let CartScreen = connect(mapStateToProsp,mapDispatchToProps)(Cart);

export default () => (
  <CartScreen />
)
