"use client";
import React from "react";
import { CloseButton } from "../Customization";
import "./Navbar.css";

export default function CartModal({ isCartOpen, closeCart }) {
  React.useEffect(() => {
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
  return (
    <>
      {isCartOpen && (
        <div className="fixed flex justify-end top-0 left-0 w-full h-full z-[100] transition-transform ease-in-out delay-150 cart-animation">
          {/* Background Overlay */}
          <div
            className="absolute w-full h-full bg-[rgba(0,0,0,0.7)]"
            onClick={closeCart}
          ></div>
          {/* <!-- Cart content --> */}
          <div className="absolute w-full lg:w-[22.5rem] h-[100vh] bg-white lg:rounded-l-2xl shadow dark:bg-gray-700 overflow-y-auto">
            {/* <!-- Cart header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Your Cart
              </h3>
              <div onClick={closeCart}>
                <CloseButton />
              </div>
            </div>
            <div>this is my cart</div>
          </div>
        </div>
      )}
    </>
  );
}
