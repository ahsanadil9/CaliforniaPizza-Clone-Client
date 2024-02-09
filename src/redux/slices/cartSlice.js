import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItem",
  initialState: {
    cartItems: [],
    totalAmountItems: 0,
  },
  reducers: {
    addToCart(state, action) {
      const { id, quantity } = action.payload;
      const item = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

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
    calculateTotalAmount(state, action) {
      const totalAmount = state.cartItems.reduce(
        (acc, curr) => acc + Number(curr.discountedPrice),
        0
      );
      return { ...state, totalAmountItems: totalAmount };
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteCartItem,
  calculateTotalAmount,
} = cartSlice.actions;
export const selectCartItems = (state) => state.cartItems.cartItems;
export const totalPriceItems = (state) => state.cartItems.totalAmountItems;
export default cartSlice.reducer;
