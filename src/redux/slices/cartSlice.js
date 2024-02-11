import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalAmountItems: 0,
  },
  reducers: {
    addToCart(state, action) {
      const { id, quantity } = action.payload;
      const item = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (!existingItem) {
        state.cartItems.push(item);
      }
    },

    increaseQuantity(state, action) {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);

      if (item) {
        if (!item.originalDiscountedPrice) {
          item.originalDiscountedPrice = Number(item.discountedPrice);
        }

        item.quantity += 1;

        const updatedDiscountedPrice =
          item.originalDiscountedPrice * item.quantity;
        item.discountedPrice = `${updatedDiscountedPrice}`;
      }
    },

    decreaseQuantity(state, action) {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item && item.quantity > 0) {
        if (!item.originalDiscountedPrice) {
          item.originalDiscountedPrice = Number(item.discountedPrice);
        }

        item.quantity -= 1;
        item.discountedPrice =
          item.discountedPrice - item.originalDiscountedPrice;
      }
    },
    deleteCartItem(state, action) {
      const itemId = action.payload;
      const userConfirmed = window.confirm(
        "Are you sure you want to delete this item?"
      );
      if (userConfirmed) {
        const updatedCartItems = state.cartItems.filter(
          (item) => item.id !== itemId
        );
        return { ...state, cartItems: updatedCartItems };
      }
    },
    calculateTotalAmount(state, action) {
      const totalAmount = state.cartItems.reduce(
        (acc, curr) => acc + Number(curr.discountedPrice),
        0
      );
      return { ...state, totalAmountItems: totalAmount }; // Update totalAmountItems, not cartItems
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
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalAmountItems = (state) => state.cart.totalAmountItems;

export default cartSlice.reducer;
