"use client";
import React from "react";
import { CloseButton } from "../Customization";
import { UseClickOutside } from "../Customization";
import "./Navbar.css";

export default function CartModal({ isModalOpen, closeModal }) {
  const modalRef = UseClickOutside(closeModal);

  return (
    <>
      {isModalOpen && (
        <div
          ref={modalRef}
          className="fixed flex justify-end top-0 left-0 w-full h-full z-[100] cart-animation"
        >
          {/* Background Overlay */}
          <div
            className="absolute w-full h-full bg-[rgba(0,0,0,0.4)]"
            onClick={closeModal}
          ></div>
          {/* <!-- Cart content --> */}
          <div className="cart-animation absolute w-[22.5rem] h-[100vh] bg-white rounded-l-2xl shadow dark:bg-gray-700">
            {/* <!-- Cart header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Your Cart
              </h3>
              <div onClick={closeModal}>
                <CloseButton />
              </div>
            </div>
            <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
              Save Changes
            </button>
          </div>
        </div>
      )}
    </>
  );
}
