"use client";
import { React, useEffect, useContext } from "react";
import { CloseButton } from "../Customization";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  increaseQuantity,
  decreaseQuantity,
  deleteCartItem,
  calculateTotalAmount,
  selectTotalAmountItems,
} from "@/src/redux/slices/cartSlice";
import { useRouter } from "next/navigation";
import { OrderContext } from "./cartContext";

export default function CartModal({ isCartOpen, closeCart }) {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItems);
  const totalAmountItems = useSelector(selectTotalAmountItems);
  const grandTotal = totalAmountItems;
  const { setOrderData } = useContext(OrderContext);
  const router = useRouter();
  const handleClick = () => {
    router.push("customercheckout");
  };

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  const handleDecrease = (itemId) => {
    dispatch(decreaseQuantity(itemId));
    dispatch(calculateTotalAmount());
  };

  const handleIncrease = (itemId) => {
    dispatch(increaseQuantity(itemId));
    dispatch(calculateTotalAmount());
  };

  const handleDelete = (itemId) => {
    dispatch(deleteCartItem(itemId));
  };

  useEffect(() => {
    const updatedOrderData = cartItem.map((item) => ({
      itemId: item._id,
      quantity: item.quantity,
    }));
    setOrderData({ items: updatedOrderData });
  }, [cartItem]);

  return (
    <>
      {isCartOpen && (
        <div className="fixed flex justify-end top-0 left-0 w-full md:w-full h-full z-[1055] overflow-x-hidden overflow-y-hidden outline-none transition-opacity ease-in-out duration-300 delay-150 cart-animation">
          {/* Background Overlay */}
          <div
            className="absolute w-full h-full bg-[rgba(0,0,0,0.7)]"
            onClick={closeCart}
          />
          {/* <!-- Cart content --> */}
          <div className="absolute w-[20rem] h-full bg-white lg:rounded-l-2xl shadow overflow-y-scroll">
            {/* <!-- Cart header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-gray-900">Your Cart</h3>
              <div onClick={closeCart}>
                <CloseButton />
              </div>
            </div>
            {/* <!-- Cart Item Names with Price and description --> */}
            <div className="flex flex-col justify-between p-4 h-[92%]  ">
              <div className="">
                {cartItem.map((item) => (
                  <div className="border-b mt-2" key={item._id}>
                    <div className="flex justify-between">
                      <div className="flex space-x-3 items-center">
                        <div className="">
                          <Image
                            src={item.imageUrl}
                            width={100}
                            height={100}
                            alt="banner image"
                            className="w-12 h-12 rounded-lg"
                            priority
                          />
                        </div>
                        <div className="Flash Deal name font-semibold">
                          {item.name}
                        </div>
                      </div>
                      <div className="Price and add button">
                        <div className="Rs-899 font-light flex justify-end">
                          Rs. {item.price}
                        </div>
                        <div className="del and add button flex space-x-4 items-center m-1">
                          <div>
                            {item.quantity === 1 ? (
                              <Image
                                src="https://img.icons8.com/material-outlined/24/delete.png"
                                alt="delete"
                                width={24}
                                height={24}
                                onClick={() => handleDelete(item._id)}
                                className="rounded-full bg-gray-100 p-[6px] cursor-pointer hover:bg-red-600 hover:text-white"
                              />
                            ) : (
                              <Image
                                src="https://img.icons8.com/material-outlined/24/minus.png"
                                alt="minus"
                                width={24}
                                height={24}
                                onClick={() => handleDecrease(item._id)}
                                className="rounded-full bg-gray-100 p-[6px] cursor-pointer hover:bg-red-600 hover:text-white"
                              />
                            )}
                          </div>

                          <div className="text-lg">{item.quantity}</div>
                          <div>
                            <div>
                              <Image
                                src="https://img.icons8.com/android/24/plus.png"
                                alt="plus"
                                width={24}
                                height={24}
                                onClick={() => handleIncrease(item._id)}
                                className="rounded-full bg-gray-100 p-[6px] cursor-pointer hover:bg-red-600 hover:text-white"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* {updateOrderData(item._id, item.quantity)} */}

                    <div className="items name and desc price mb-8 mt-4 text-sm font-light">
                      <div className="">
                        <div className="flex justify-between">
                          <div className="name">+ Kabab Popper</div>
                          <div className="price">Rs. 200</div>
                        </div>
                        <div className="flex justify-between">
                          <div className="name">+ Arizona Cream</div>
                          <div className="price">-</div>
                        </div>
                        <div className="flex justify-between">
                          <div className="name">+ Coke</div>
                          <div className="price">-</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {cartItem.length === 0 ? (
                <div className="text-red-600 flex absolute font-extrabold text-2xl text-center items-center top-[45%] right-0 pr-14">
                  Your Cart is Empty
                </div>
              ) : (
                <div className="bottom-0 sticky pb-4 bg-white border-t-black">
                  <div className="total of items mt-5">
                    <div className="flex justify-between font-light">
                      <div>Total</div>
                      <div>Rs.{totalAmountItems}</div>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <div>Grand Total</div>
                      <div>Rs. {grandTotal}</div>
                    </div>
                  </div>

                  <div
                    className="relative cursor-pointer flex justify-center items-center bg-red-700 h-12 rounded-md flex-grow-1"
                    onClick={handleClick}
                  >
                    <div className="text-white font-bold">Checkout</div>
                    <div className="absolute flex right-0 mr-6">
                      <Image
                        src="/assets/checkout.png"
                        alt=""
                        width={50}
                        height={50}
                        className="h-9 w-9 rounded-full bg-white "
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
