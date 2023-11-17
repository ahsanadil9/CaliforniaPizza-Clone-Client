import React from "react";
import { CloseButton } from "../Customization";

export default function CartModal(props) {
  const ismodalOpen = props.isModalOpen;
  const closeModal = props.closemodal;
  return (
    <>
      {/* <!-- Main modal --> */}
      <div className="relative">
        <div
          className={`${
            ismodalOpen ? "fixed" : "hidden"
          } z-50 relative p-4 w-full max-w-2xl max-h-full`}
        >
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Your Cart
              </h3>
              <div onClick={closeModal}>
                <CloseButton />
              </div>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s
              </p>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
