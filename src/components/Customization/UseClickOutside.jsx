import { useEffect, useRef } from "react";

export default function useClickOutside(callback) {
  const ref = useRef(null);

  useEffect(() => {
    const closeOnOutsideClick = (e) => {
      const isClickInsideModal = ref.current && ref.current.contains(e.target);
      const isScrollBarClick = e.target.scrollHeight > window.innerHeight;

      if (!isClickInsideModal && !isScrollBarClick) {
        console.log("clicked...");
        callback();
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [callback]);
  useEffect(() => {
    return () => {
      ref.current = null;
    };
  }, []);
  return ref;
}
