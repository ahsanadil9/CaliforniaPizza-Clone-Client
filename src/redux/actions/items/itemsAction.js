import axios from "axios";
import { getItemsData } from "../../../routes/apiRequests";

export const FETCH_ITEMS_REQUEST = "FETCH_ITEMS_REQUEST";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAILURE = "FETCH_ITEMS_FAILURE";

export const fetchItems = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ITEMS_REQUEST });
    getItemsData()
      .then((response) => {
        dispatch({
          type: FETCH_ITEMS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ITEMS_FAILURE,
          payload: error.message,
        });
      });
  };
};
