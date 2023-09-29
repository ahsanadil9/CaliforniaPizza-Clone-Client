import React from "react";
import Image from "next/image";
import PizzaImage from "app/assets/PizzaImage.webp";

export default function PizzaCart() {
  const pizzaItems = [
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

  return (
    <div>
      {/* navbar */}
      <nav className="fixed z-50 top-0 w-full bg-white border-b-2 shadow-black-500 shadow-sm">
        <div className="flex items-center px-4 py-3">
          <h1 className="text-red-500 font-bold">California</h1>
          <h1 className="text-green-500">Pizza</h1>
        </div>
      </nav>
      {/* main content */}
      <main className="min-h-screen lg:pt-24 lg:px-22 md:pt-24 md:px-10 pt-24 px-6">
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
        <section>
          <h1 className="p-12 text-center text-3xl font-serif mt-3 mb-[-19rem]">
            OVERLOAD MEATY PIZZA
          </h1>
          {/* pizza item cart selection */}
          <div className="relative min-h-screen lg:px-22 lg:mb-56 md:pt-24 md:px-10">
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-14 md:grid-cols-2 sm:grid-cols-2">
              {pizzaItems.map((pizzaItem) => (
                <article
                  key={pizzaItem.id}
                  className="relative flex flex-col items-start lg:mt-40 md:mt-96"
                >
                  <Image
                    src={pizzaItem.image}
                    alt="Pizza Image"
                    className="z-30 mt-8"
                    style={{ borderRadius: "40px" }}
                    width={383}
                    height={100}
                  />
                  <span
                    style={{ transform: "skewX(-20deg)" }}
                    className="absolute top-12 right-10 left-30 p-1 bg-yellow-400 z-40 text-black text-sm font-bold animate-pulse"
                  >
                    35% OFF
                  </span>

                  <div className="absolute bg-gray-100 text-white lg:px-6 lg:pt-14 lg:mt-[52vh] z-10 rounded-2xl w-full  md:mt-48 h-[38vh]">
                    <div className="pb-7 pt-3">
                      <h3 className="text-lg font-extrabold text-black">
                        {pizzaItem.name}
                      </h3>
                      <p className="text-xs text-gray-500 h-8 pt-1">
                        {pizzaItem.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex">
                        <p className="text-sm pr-1 font-extrabold text-black px-2">
                          From
                        </p>
                        <p className="text-sm pr-1 font-bold text-red-600">
                          <del>Rs. {pizzaItem.price}</del>
                        </p>
                        <p className="text-sm pr-1 font-bold text-green-700">
                          Rs.{pizzaItem.discountedPrice}
                        </p>
                      </div>
                      <button className="bg-red-600 mt-2 text-white p-2 rounded-md w-full">
                        Add {pizzaItem.name} To Cart
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
