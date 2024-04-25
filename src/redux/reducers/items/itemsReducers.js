import {
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
} from "../../actions/items/itemsAction";
import { addToCart } from "../../slices/cartSlice";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: null,
      };
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // case "ADD_TO_CART": // Dispatch the addToCart action when adding an item to the cart
    //   const itemToAdd = state.items.find(
    //     (item) => item.id === action.payload.id
    //   );
    //   if (itemToAdd) {
    //     // Dispatch addToCart action with item payload
    //     addToCart(itemToAdd);
    //   }
    //   return state;
    default:
      return state;
  }
};

export default itemReducer;
