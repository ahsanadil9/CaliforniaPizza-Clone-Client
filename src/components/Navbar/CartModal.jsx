"use client";
import React from "react";
import { CloseButton } from "../Customization";
import { UseClickOutside } from "../Customization";

export default function CartModal({ isModalOpen, closeModal }) {
  const modalRef = UseClickOutside(closeModal);

  return (
    <>
      {/* <!-- Main modal --> */}
      {/* <div
        className={`${
          ismodalOpen
            ? "fixed bg-opacity-50 transition-all ease-in-out duration-700"
            : "hidden"
        } z-[100] relative flex justify-end top-0 bottom-0 `}
      > */}
      {isModalOpen && (
        <div
          ref={modalRef}
          className="bg-opacity-50 transition-all ease-in-out duration-700 z-[100] relative flex justify-end top-0 bottom-0"
        >
          {/* <!-- Modal content --> */}
          <div className="absolute w-[22.5rem] h-[100vh] bg-white rounded-l-2xl shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Your Cart
              </h3>
              <div onClick={closeModal}>
                <CloseButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
