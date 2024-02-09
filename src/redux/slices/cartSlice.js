import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItem",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart(state, action) {
      const { id, quantity } = action.payload;
      const item = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === id);
      console.log("item id(cartSlice): ", id);

      console.log("quantity (cartSlice)", quantity);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push(item);
      }
    },
    increaseQuantity(state, action) {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      const { discountedPrice } = action.payload;

      if (item) {
        item.quantity += 1;
        const counterPrice = Number(discountedPrice) * item.quantity;
        item.discountedPrice = `${counterPrice}`;
      }
    },
    decreaseQuantity(state, action) {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
    deleteCartItem(state, action) {
      const itemId = action.payload;
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== itemId
      );
      return { ...state, cartItems: updatedCartItems };
    },
    totalAmountItems(state, action) {
      const itemId = action.payload;
      const { discountedPrice } = action.payload;
      const priceCalc = state.cartItems.reduce(
        (acc, curr) => acc + Number(curr.discountedPrice),
        0
      );
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteCartItem,
  totalAmountItems,
} = cartSlice.actions;
export const selectCartItems = (state) => state.cartItems.cartItems;

export default cartSlice.reducer;
