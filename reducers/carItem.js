const carItems = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state,action.payload]
      break;
    case 'REMOVE_FROM_CART':
      return state.filter(cartItem=>cartItem.id !== action.payload.id)
      break;
    default:
      return state
  }

}

export default carItems;
