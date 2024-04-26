import { handleRequest } from "./handleRequests";
import {
  createOrders,
  getCategories,
  getOrders,
  getItems,
  createCustomer,
} from "./apis";
import axios from "axios";

// Orders
export const getOrdersData = async () => {
  const request = () => axios.get(getOrders);
  return handleRequest(request);
};

export const createOrdersData = async (orderData) => {
  const request = () => axios.post(createOrders, orderData);
  return handleRequest(request);
};

// Items
export const getItemsData = async () => {
  const request = () => axios.get(getItems);

  return handleRequest(request);
};

//Categories
export const getCategoriesData = async () => {
  const request = () => axios.get(getCategories);
  return handleRequest(request);
};

//Customers
export const createCustomerData = async (customerData) => {
  const request = () => axios.post(createCustomer, customerData);
  return handleRequest(request);
};
