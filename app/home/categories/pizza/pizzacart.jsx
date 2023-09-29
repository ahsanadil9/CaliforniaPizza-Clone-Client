import Image from "next/image";
import React from "react";
import PizzaImage from "app/assets/PizzaImage.webp";

export default function PizzaCart({ item }) {
  const pizzas = [
    {
      id: 1,
      name: "Arizona Cream",
      description: "Made in Creamy sauce, Chicken Tikka, Onion, Cheese",
      price: 749,
      discountedPrice: 547,
      image: PizzaImage,
    },
    {
      id: 2,
      name: "Mighty Mexicana",
      description:
        "Made in Tomato sauce, Shredded chicken, Onions, Capsicum, Cheese",
      price: 499,
      discountedPrice: 347,
      image: PizzaImage,
    },
    {
      id: 3,
      name: "Cheese Burst",
      description:
        "Made in Tomato sauce, Mozzarella cheese, Cheese burst crust",
      price: 649,
      discountedPrice: 500,
      image: PizzaImage,
    },
    {
      id: 4,
      name: "Burst",
      description: "Mozzarella cheese, Cheese burst crust",
      price: 649,
      discountedPrice: 550,
      image: PizzaImage,
    },
    {
      id: 5,
      name: "Cheese Burst",
      description: "Made in Tomato sauce, Mozzarella cheese",
      price: 599,
      discountedPrice: 430,
      image: PizzaImage,
    },
  ];

  // const cartItems = pizzas.map((pizza) => {
  //   return {
  //     id: pizza.id,
  //     name: pizza.name,
  //     description: pizza.description,
  //     price: pizza.price,
  //     discountedPrice: pizza.discountedPrice,
  //     image: pizza.image,
  //     quantity: 4,
  //   };
  // });
  // const cartItems = pizzas[0];
  return (
    <div>
      <nav className="fixed z-50 top-0 w-full bg-white border-b-2 shadow-black-500 shadow-sm">
        <div className="flex items-center px-4 py-3">
          <h1 className="text-red-500 font-bold">California</h1>
          <h1 className="text-green-500">Pizza</h1>
        </div>
      </nav>
      <div className="min-h-screen lg:pt-24 lg:px-22 md:pt-24 md:px-10 pt-24 px-6">
        <div className="relative flex items-center border border-gray-300 rounded-full w-full">
          <input
            type="search"
            className="relative pl-12 border-none focus:ring-primary focus:ring-inset focus:outline-none bg-gray-200 px-2 py-2.5 rounded-full w-full"
            placeholder="Search Meaty Pizza"
          />
          <button
            type="submit"
            className="absolute md:right-auto left-0 md:left-auto flex items-center justify-center p-3 rounded-full hover:bg-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a.75.75 0 01-1.06 1.06l-4.817-4.817A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div>
          <div className="p-12 text-center text-3xl font-serif mt-3 mb-[-19rem]">
            OVERLOAD MEATY PIZZA
          </div>

          <div className="relative min-h-screen lg:px-22 lg:mb-52 md:pt-24 md:px-10 pt-24 px-6">
            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {pizzas.map((cartItems) => (
                <div
                  key={cartItems.id}
                  className="relative flex flex-col items-start lg:mt-40 md:mt-96"
                >
                  <Image
                    src={cartItems.image}
                    alt="Pizza"
                    className="z-30 mt-9 pizza-image"
                    style={{ borderRadius: "40px" }}
                    width={364}
                    height={100}
                  />
                  <span
                    style={{ transform: "skewX(-20deg)" }}
                    class="absolute top-12 right-10 left-30 p-1 bg-yellow-400 z-40 text-black text-sm font-bold animate-pulse"
                  >
                    35% OFF
                  </span>

                  <div className="absolute bg-gray-200 text-white lg:px-9 lg:pt-28 lg:pb-7 md:mt-48 lg:mt-80 lg:mb-56 z-10 rounded-2xl">
                    <h3 className="text-lg font-bold text-black">
                      {cartItems.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {cartItems.description}
                    </p>
                    <div className="flex mt-6">
                      <p className="text-sm pr-1 font-bold text-black">From</p>
                      <p className="text-sm pr-1 font-bold text-red-600">
                        <del>Rs. {cartItems.price}</del>
                      </p>
                      <p className="text-sm pr-1 font-bold text-green-700">
                        Rs.{cartItems.discountedPrice}
                      </p>
                    </div>
                    <div>
                      <button className="bg-red-700 mt-2 text-white p-2 rounded-md w-full">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
