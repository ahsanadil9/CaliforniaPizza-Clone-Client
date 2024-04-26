import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./../slices/cartSlice";
import itemReducer from "./../reducers/items/itemsReducers";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    items: itemReducer,
  },
});

export default store;
