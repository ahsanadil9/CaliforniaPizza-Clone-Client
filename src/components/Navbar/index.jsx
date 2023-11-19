"use client";
import { React, useState } from "react";
import Image from "next/legacy/image";
// import Image from "next/image";
import Link from "next/link";
import { CartModal } from "..";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const openCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const closeCart = () => {
    setIsCartOpen(false);
  };
  return (
    <>
      <nav className="relative w-full bg-white">
        <div>
          <CartModal isCartOpen={isCartOpen} closeCart={closeCart} />
        </div>
        <div className="">
          {/* california logo */}
          <div className="flex items-center px-4 py-2 h-14 md:justify-center lg:justify-center lg:h-16">
            <div className="relative z-10 w-16 aspect-square  md:w-20 lg:bg-white lg:rounded-full lg:mb-[-3.5rem] lg:w-24 lg:border-b-2">
              <Image
                src="/assets/california-logo.webp"
                alt="California Pizza Logo"
                // // fill
                width={10}
                height={10}
                // layout="fill"
                // layout="responsive"
                // objectFit="cover"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
            </div>
          </div>
          {/* phone number */}
          <div className="absolute p-3 items-center flex z-10 right-0 top-0 md:left-0 md:top-0 lg:left-0 lg:mb-[-18px] lg:top-[-1.9px]">
            <Link href="/">
              <div className="flex bg-red-600 text-white font-extrabold lg:text-sm text-[10px] p-2 lg:p-3 rounded-lg">
                <Image
                  src="/assets/phone.png"
                  alt="phone"
                  width={0}
                  height={0}
                  className="pr-1 w-4 h-3 mt-[1px] lg:w-5 lg:h-4 lg:mt-[2px]"
                />
                <span className=""> 034-336-034-31</span>
              </div>
            </Link>
          </div>
          {/* cart */}
          <div className=""></div>
          <div
            onClick={openCart}
            className="lg:absolute cursor-pointer z-50 top-1/2 right-4 fixed lg:top-3 lg:right-4 bg-white rounded-full w-9 h-9 p-1 shadow-md shadow-black lg:rounded-none lg:shadow-none lg:bg-transparent"
          >
            <Image
              src="/assets/cart-red.png"
              alt="cart"
              width={10}
              height={10}
              // priority
              // layout="responsive"
              // layout="fill"
              // fill
              // objectFit=""
              sizes="(max-width: 768px) 100vw, 100vw"
              className="h-6 ml-1 mt-[2px] w-5 lg:h-8 lg:w-7 hover:rounded-lg lg:hover:rounded-md hover:bg-gray-50"
            />
          </div>
          {/* another work */}
          <div></div>
        </div>
      </nav>
    </>
  );
}
