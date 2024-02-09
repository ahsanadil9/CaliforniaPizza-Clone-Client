import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./../slices/cartSlice";

const store = configureStore({
  reducer: {
    cartItems: cartReducer,
  },
});

export default store;
