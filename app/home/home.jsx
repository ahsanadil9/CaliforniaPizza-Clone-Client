import React from "react";
import Pizzacart from "./categories/pizza/pizzacart";
import Navbar from "./navbar";

export default function home() {
  return (
    <>
      <Navbar />
      <Pizzacart />;
    </>
  );
}
