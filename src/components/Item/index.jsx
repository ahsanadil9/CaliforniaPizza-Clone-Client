"use client";
import { React, useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  selectCartItems,
  calculateTotalAmount,
  increaseQuantity,
} from "@/src/redux/slices/cartSlice";

export default function Item({ item, cartMessage }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [showItemAdded, setShowItemAdded] = useState(false);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(increaseQuantity());
    dispatch(calculateTotalAmount());
    console.log("Cart Items []: ", item);
  };

  const handleShowMessage = () => {
    setShowItemAdded(true);
    setTimeout(() => {
      setShowItemAdded(false);
    }, 2000);
  };

  return (
    <>
      <article
        key={item.id}
        className="relative flex flex-col item-start bg-gray-100 rounded-t-3xl rounded-b-2xl max-w-sm h-full w-full"
      >
        <div className="relative aspect-square rounded-3xl lg:rounded-3xl">
          <Image
            fill
            src={item.image}
            alt="Pizza Image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-3xl"
          />
          <span
            style={{ transform: "skewX(-20deg)" }}
            className="discount-tag absolute z-10 top-2 right-3 md:right-4 lg:top-3 lg:right-5 p-1 bg-yellow-400 text-black font-bold md:font-bold lg:font-bold animate-pulse text-xs md:text-base"
          >
            {item.discountTag} OFF
          </span>
        </div>
        <div className="flex-grow flex flex-col justify-between gap-4 text-xs md:text-base w-full md:w-full lg:w-full z-0 pb-3 px-2 lg:px-4">
          <div className="mt-4 md:mt-4">
            <h3 className="font-extrabold text-sm md:text-lg lg:text-lg lg:pt-2">
              {item.name}
            </h3>
            <p className="desc-pizza text-gray-500 mt-1 text-xs lg:text-sm lg:mt-1 text-ellipsis line-clamp-2">
              {item.description}
            </p>
          </div>

          <div className="font-extrabold">
            <div className="flex flex-wrap ml-1 text-xs md:text-lg mb-1">
              <p className="text-black pr-1">From</p>
              <p className="text-red-600 pr-1">
                <del className="">
                  Rs.<span className="">{item.price}</span>
                </del>
              </p>
              <p className="text-green-700">Rs.{item.discountedPrice}</p>
            </div>
            <div className="addcart flex justify-center items-center mx-auto bg-red-600 rounded-md py-1 lg:py-2">
              <div className="relative h-4 w-4 mr-1 md:w-5 md:h-5 lg:w-6">
                <Image
                  src="/assets/cart.png"
                  alt="cart icon"
                  layout="fill"
                  sizes="(max-width: 768px) 100vw, 100vw"
                  className=""
                />
              </div>
              <button
                onClick={() => {
                  handleAddToCart(item);
                  handleShowMessage();
                }}
                className="text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </article>
      <>
        {/* {cartItems.some((cartItem) => cartItem.id === item.id) ? ( */}
        {
          showItemAdded && cartItems.length > 0 && (
            <div
              style={{
                position: "fixed",
                bottom: 0,
                width: "20%",
                zIndex: 1000,
              }}
              className="flex justify-center items-center p-3 mb-4 text-lg text-green-800 rounded-lg bg-green-300 dark:bg-gray-800 dark:text-green-400"
            >
              <Image
                width="30"
                height="30"
                src="https://img.icons8.com/color/48/verified-account--v1.png"
                alt="verified-account--v1"
              />

              <span className="font-medium">Item add to Cart</span>
            </div>
          )
          // ) : (
          //   <span className="font-medium">Items added to Cart</span>
          // )
        }
      </>
    </>
  );
}
