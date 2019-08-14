const carItems = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {cartItems:[...state.cartItems,action.payload]}
      break;
    case 'REMOVE_FROM_CART':
      return {
        cartItems:state.cartItems.filter(cartItem=>cartItem.id !== action.payload.id)
      }

      break;
    default:
      return state
  }

}

export default carItems;
