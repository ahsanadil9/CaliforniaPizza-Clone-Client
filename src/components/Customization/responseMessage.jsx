import Image from "next/image";
import React from "react";

const ResponseMessage = ({ message }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 20, // Adjust as needed
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#72ff89",
        padding: "10px 20px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <Image
        width="30"
        height="30"
        src="https://img.icons8.com/color/48/verified-account--v1.png"
        alt="verified-account--v1"
      />
      <span style={{ marginLeft: "10px", fontWeight: "500" }}>{message}</span>
    </div>
  );
};

export default ResponseMessage;
