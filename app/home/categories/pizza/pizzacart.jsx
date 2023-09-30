import React from "react";
import Image from "next/image";
import PizzaImage from "public/assets/pizzaImage.webp";

export default function PizzaCart() {
  const pizzaItems = [
    {
      id: 1,
      discountTag: 35,
      name: "Arizona Cream",
      description: "Made in Creamy sauce, Chicken Tikka, Onion, Cheese",
      price: 749,
      discountedPrice: 547,
      image: PizzaImage,
    },
    {
      id: 2,
      discountTag: 35,
      name: "Mighty Mexicana",
      description:
        "Made in Tomato sauce, Shredded chicken, Onions, Capsicum, Cheese",
      price: 499,
      discountedPrice: 347,
      image: PizzaImage,
    },
    {
      id: 3,
      discountTag: 35,
      name: "Cheese Burst",
      description:
        "Made in Tomato sauce, Mozzarella cheese, Cheese burst crust",
      price: 649,
      discountedPrice: 500,
      image: PizzaImage,
    },
    {
      id: 4,
      discountTag: 35,
      name: "Burst",
      description: "Mozzarella cheese, Cheese burst crust",
      price: 649,
      discountedPrice: 550,
      image: PizzaImage,
    },
    {
      id: 5,
      discountTag: 30,
      name: "Cheese Burst",
      description: "Made in Tomato sauce, Mozzarella cheese",
      price: 599,
      discountedPrice: 430,
      image: PizzaImage,
    },
    {
      id: 6,
      discountTag: 30,
      name: "Fajita Pizza",
      description: "Made in Tomato sauce, Mozzarella cheese",
      price: 599,
      discountedPrice: 430,
      image: PizzaImage,
    },
    {
      id: 8,
      discountTag: 30,
      name: "Fajita Pizza",
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
      <main className="mt-24 min-h-screen lg:pt-8 lg:px-22 md:pt-24 md:px-10 px-6">
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
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a.75.75 0 01-1.06 1.06l-4.817-4.817A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <section>
          <h1 className="p-12 text-center text-lg lg:text-3xl font-serif lg:mt-3 mb-[-19rem]">
            OVERLOAD MEATY PIZZA
          </h1>
          {/* pizza item cart selection */}

          <div className="relative min-h-screen pb-36 mt-72 lg:mt-2 lg:px-10 lg:pb-56 md:pt-24 md:px-10 ">
            <div className="relative grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-14 md:grid-cols-2 sm:grid-cols-2">
              {pizzaItems.map((pizzaItem) => (
                <article
                  key={pizzaItem.id}
                  className="relative flex flex-col items-start mb-48 md:mb-44 md:mt-96 lg:mt-40 lg:mb-0"
                >
                  <Image
                    src={pizzaItem.image}
                    alt="Pizza Image"
                    className="z-30 lg:mt-9 w-auto md:w-auto lg:w-auto mx-auto"
                    style={{ borderRadius: "40px", maxWidth: "100%" }}
                    width={383}
                    height={100}
                  />
                  <span
                    style={{ transform: "skewX(-20deg)" }}
                    className="absolute text-xs top-3 right-5 lg:top-12 lg:right-10 lg:left-30 p-1 bg-yellow-400 z-40 text-black lg:font-bold animate-pulse"
                  >
                    {pizzaItem.discountTag} OFF
                  </span>
                  <div className="absolute bg-gray-100 text-white text-sm sm:pt-10 md:pt-20 mt-28 pt-10 pb-5 h-[1] md:h-[90vh]  md:mt-48 lg:mb-0 lg:px-6 lg:pt-12 lg:mt-[52vh] z-10 rounded-2xl lg:h-[36vh] w-full">
                    <div className="px-2 pt-9 lg:pb-7 sm:mt-5 md:mt-54 lg:pt-0 h-16 lg:h-20">
                      <h3 className="lg:text-lg font-bold lg:font-extrabold text-black">
                        {pizzaItem.name}
                      </h3>
                      <p className="text-xs text-gray-500  pt-1">
                        {pizzaItem.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex px:2 pt-7 mt-11 lg:px-0 lg:py-0 lg:mt-2  mx-auto">
                        <p className="text-xs lg:text-sm pr-1 font-bold lg:font-extrabold text-black px-4 lg:px-2">
                          From
                        </p>
                        <p className="text-xs lg:text-sm pr-1 font-medium lg:font-bold text-red-600">
                          <del>Rs. {pizzaItem.price}</del>
                        </p>
                        <p className="text-xs lg:text-sm pr-1 font-medium lg:font-bold text-green-700">
                          Rs.{pizzaItem.discountedPrice}
                        </p>
                      </div>
                      <button className="block mx-auto bg-red-600 text-sm mt-1 lg:mt-2 lg:text-xs text-white lg:p-2 rounded-md px-9 lg:w-full">
                        Add to Cart
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
