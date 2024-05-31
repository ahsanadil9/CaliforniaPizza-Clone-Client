"use client";
import { CustomerCheckout } from "@/src/components";
import store from "@/src/redux/store/store";
import React from "react";
import { Provider } from "react-redux";

export default function customerCheckout() {
  return (
    <Provider store={store}>
      <CustomerCheckout />;
    </Provider>
  );
}
