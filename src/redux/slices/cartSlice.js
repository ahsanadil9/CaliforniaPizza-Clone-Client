import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalAmountItems: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item._id === newItem._id
      );
      if (existingItemIndex !== -1) {
        const updatedItem = { ...state.cartItems[existingItemIndex] };
        updatedItem.quantity++;
        state.cartItems[existingItemIndex] = updatedItem;
      } else {
        const newCartItem = { ...newItem, quantity: 1 };
        state.cartItems.push(newCartItem);
      }
    },

    increaseQuantity(state, action) {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item._id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity(state, action) {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item._id === itemId);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
    calculateTotalAmount(state, action) {
      const totalAmount = state.cartItems.reduce((acc, curr) => {
        if (!isNaN(curr.price) && !isNaN(curr.quantity)) {
          return acc + curr.price * curr.quantity;
        } else {
          return acc;
        }
      }, 0);

      return { ...state, totalAmountItems: totalAmount };
    },
    deleteCartItem(state, action) {
      const itemId = action.payload;
      const userConfirmed = window.confirm(
        "Are you sure you want to delete this item?"
      );
      if (userConfirmed) {
        const updatedCartItems = state.cartItems.filter(
          (item) => item._id !== itemId
        );
        return { ...state, cartItems: updatedCartItems };
      }

      return calculateTotalAmount(state, action);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmountItems = 0;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteCartItem,
  calculateTotalAmount,
  clearCart,
} = cartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalAmountItems = (state) => state.cart.totalAmountItems;

export default cartSlice.reducer;
