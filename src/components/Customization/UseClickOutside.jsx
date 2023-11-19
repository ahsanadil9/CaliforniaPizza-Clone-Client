// import { useEffect, useRef } from "react";

// export default function useClickOutside({ callback, isCartOpen }) {
//   const ref = useRef(null);

//   useEffect(() => {
//     const closeOnOutsideClick = (e) => {
//       // const isClickInsideModal = ref.current && ref.current.contains(e.target);
//       const isScrollBarClick = e.target.scrollHeight > window.innerHeight;
//       // const backgroundOverLay =
//       //   e.target.classList.contains("background-overlay");

//       if (isScrollBarClick && isCartOpen) {
//         console.log("clicked...");
//         callback();
//       }
//     };

//     document.addEventListener("mousedown", closeOnOutsideClick);

//     return () => {
//       document.removeEventListener("mousedown", closeOnOutsideClick);
//     };
//   }, [callback, isCartOpen]);
//   useEffect(() => {
//     return () => {
//       ref.current = null;
//     };
//   }, []);
//   return ref;
// }
