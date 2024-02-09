"use client";
import { React, useState, useEffect } from "react";
import { CloseButton } from "../Customization";
import "./Navbar.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  increaseQuantity,
  decreaseQuantity,
} from "@/src/redux/slices/cartSlice";

export default function CartModal({ isCartOpen, closeCart }) {
  const cartItem = useSelector(selectCartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Clean up the effect
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);
  // total of items
  const totalItems = cartItem.reduce(
    (acc, curr) => acc + Number(curr.discountedPrice),
    0
  );
  const grandTotal = totalItems;

  const idItem = cartItem.reduce((counterObj, item) => {
    counterObj[item.id] = item.quantity;
    return counterObj;
  }, {});
  const allItemQuantities = [];
  for (const id in idItem) {
    const addQuantity = idItem[id];
    allItemQuantities.push(addQuantity);
  }
  console.log("all quantities item now: ", allItemQuantities);

  // Update the counter state for each item in the cart
  const [counters, setCounter] = useState(0);
  const handleDecrease = (itemId) => {
    console.log("Decreasing quantity for item with ID:", itemId);

    dispatch(decreaseQuantity(itemId));
  };
  console.log("decrease", handleDecrease());

  const handleIncrease = (itemId) => {
    console.log("Increasing quantity for item with ID:", itemId);

    dispatch(increaseQuantity(itemId));
  };
  console.log("increase", handleIncrease());
  console.log(increaseQuantity());
  console.log(decreaseQuantity());
  return (
    <>
      {isCartOpen && (
        <div className="fixed flex justify-end top-0 left-0 w-full h-full z-[1055] overflow-y-auto overflow-x-hidden outline-none transition-opacity ease-in-out duration-300 delay-150 cart-animation">
          {/* Background Overlay */}
          <div
            className="absolute w-full h-full bg-[rgba(0,0,0,0.7)]"
            onClick={closeCart}
          ></div>
          {/* <!-- Cart content --> */}
          <div className="absolute lg:w-[22.5rem] h-[100vh] bg-white lg:rounded-l-2xl shadow overflow-y-auto">
            {/* <!-- Cart header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-gray-900">Your Cart</h3>
              <div onClick={closeCart}>
                <CloseButton />
              </div>
            </div>
            {/* <!-- Cart Item Names with Price and description --> */}
            <div className="flex flex-col justify-between p-4 h-[92%] ">
              <div className="">
                {cartItem.map((item, index) => (
                  <div className="border-b" key={index}>
                    <div className="flex justify-between">
                      <div className="flex space-x-3 items-center">
                        <div className="">
                          <Image
                            src={item.image}
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
                          Rs. {item.discountedPrice}
                        </div>
                        <div className="del and add button flex space-x-4 items-center m-1">
                          <div>
                            <Image
                              src="https://img.icons8.com/material-outlined/24/delete.png"
                              alt="minus"
                              width={22}
                              height={22}
                              onClick={() => handleDecrease(item.id)}
                              className="rounded-full bg-gray-100 p-[6px] cursor-pointer hover:bg-red-600 hover:text-white"
                            />
                          </div>
                          {/* {allItemQuantities.map((item, index) => (
                            <div key={index} className="text-lg">
                              {item}
                            </div>
                          ))} */}
                          <div className="text-lg">{item.quantity}</div>
                          <div>
                            <div>
                              <Image
                                src="https://img.icons8.com/android/24/plus.png"
                                alt="plus"
                                width={22}
                                height={22}
                                onClick={() => handleIncrease(item.id)}
                                className="rounded-full bg-gray-100 p-[6px] cursor-pointer hover:bg-red-600 hover:text-white"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                <div className="total of items mt-5">
                  <div className="flex justify-between font-light">
                    <div>Total</div>
                    <div>Rs. {totalItems}</div>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <div>Grand Total</div>
                    <div>Rs. {grandTotal}</div>
                  </div>
                </div>
              </div>

              <div className="relative cursor-pointer flex justify-center items-center bg-red-700 h-12 rounded-md flex-grow-1">
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
          </div>
        </div>
      )}
    </>
  );
}
