"use client";
import React from "react";
import { CloseButton } from "../Customization";
import "./Navbar.css";
import Image from "next/image";

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
            <div className="Flash Deal Content with names and price p-4">
              <div className="border-b">
                <div className="Flash Deal and Price with add button flex justify-between">
                  <div className="image and flash deal name flex space-x-3 items-center">
                    <div className="Image">
                      <Image
                        src="https://californiapizza.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1696497545-4-min.jpeg&w=384&q=75"
                        width={100}
                        height={100}
                        alt="banner image"
                        className="w-12 h-12 rounded-lg"
                        priority
                      />
                    </div>
                    <div className="Flash Deal name font-semibold">
                      Flash Deal 1
                    </div>
                  </div>
                  <div className="Price and add button">
                    <div className="Rs-899 font-light">Rs. 899</div>
                    <div className="del and add button">- 2 +</div>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
}
