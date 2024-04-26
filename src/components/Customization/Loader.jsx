import React from "react";

const Loader = () => (
  <div
    className="loader-container"
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      alignItems: "center",
    }}
  >
    <svg
      className="animate-spin h-5 w-5 mr-3 text-red-700"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 014.21 4.208L2.793 5.624A9.956 9.956 0 000 12c0 5.523 4.477 10 10 10v-4c-2.419 0-4.62-.87-6.308-2.309z"
      ></path>
    </svg>
    <span>Processing your order...</span>
  </div>
);

export default Loader;
