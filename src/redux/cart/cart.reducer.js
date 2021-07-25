import CartActionTypes from './cart.types';
import { addItemTOCart } from './cart,utlis';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemTOCart(state.cartItems, action, payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
