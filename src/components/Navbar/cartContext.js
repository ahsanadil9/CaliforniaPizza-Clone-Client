"use client";
import { createContext, useState } from "react";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [orderData, setOrderData] = useState({ items: [] });

  return (
    <OrderContext.Provider value={{ orderData, setOrderData }}>
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContext, OrderProvider };
