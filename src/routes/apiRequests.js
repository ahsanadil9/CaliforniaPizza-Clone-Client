import { handleRequest } from "./handleRequests";
import { createOrders, getCategories, getOrders, getItems } from "./apis";

// Orders
export const getOrdersData = async () => {
  const request = () => axios.get(getOrders);
  return handleRequest(request);
};

export const createOrdersData = async () => {
  const request = () => axios.post(createOrders);
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
