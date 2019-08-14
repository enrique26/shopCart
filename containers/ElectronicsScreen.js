/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {electronics} from '../Data';
import Products from '../components/Products';
import { connect } from 'react-redux';

class Electronics extends Component {

  static navigationOptions ={
    headerTitle:"Electronics"
  }
  render() {
    return (
      <View style={styles.container}>
        <Products products={electronics} onPress={this.props.addItemToCart}/>
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

// export default ElectronicsScreen;

///para usarse con react navigation los elementos connect de react-redux debe pasarse como un componente nuevamente
////connect(state,props)(component)
let ElectronicsScreen = connect(null,mapDispatchToProps)(Electronics)

export default () => (
  <ElectronicsScreen />
);
