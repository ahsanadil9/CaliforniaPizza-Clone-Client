"use client";
import { React, useState } from "react";
import { Item, Search } from "..";

export default function ItemList() {
  const [searchItem, setSearchItem] = useState("");
  const pizzaItems = [
    {
      id: 1,
      discountTag: 45,
      name: "Arizona Cream",
      description: "Made in Creamy sauce, Chicken Tikka, Onion, Cheese",
      price: 749,
      discountedPrice: 547,
      image: "/assets/pizzaImage.webp",
    },
    {
      id: 2,
      discountTag: 30,
      name: "Mighty Mexicana",
      description:
        "Made in Tomato sauce, Shredded chicken, Onions, Capsicum, Cheese",
      price: 499,
      discountedPrice: 347,
      image: "/assets/pizzaImage.webp",
    },
    {
      id: 3,
      discountTag: 25,
      name: "Cheese Burst",
      description:
        "Made in Tomato sauce, Mozzarella cheese, Cheese burst crust",
      price: 649,
      discountedPrice: 500,
      image: "/assets/pizzaImage.webp",
    },
    {
      id: 4,
      discountTag: 35,
      name: "Burst Hot Pizza",
      description: "Mozzarella cheese, Cheese burst crust",
      price: 649,
      discountedPrice: 550,
      image: "/assets/pizzaImage.webp",
    },
    {
      id: 5,
      discountTag: 30,
      name: "Vegetable Pizza",
      description: "Made in Tomato sauce, Mozzarella cheese",
      price: 599,
      discountedPrice: 430,
      image: "/assets/pizzaImage.webp",
    },
    {
      id: 6,
      discountTag: 30,
      name: "Spicy Cheesy Pizza",
      description: "Made in Masala Mirch sauce with cheese",
      price: 599,
      discountedPrice: 430,
      image: "/assets/pizzaImage.webp",
    },
    {
      id: 8,
      discountTag: 30,
      name: "BBQ Tikka Pizza",
      description: "Made in Hot Sauce with Cheese flavour",
      price: 599,
      discountedPrice: 430,
      image: "/assets/pizzaImage.webp",
    },
  ];

  // to search your favourite pizza
  const filteredItems = pizzaItems.filter((itemSearch) => {
    const itemName = itemSearch.name.toLowerCase();
    return itemName.startsWith(searchItem.toLowerCase());
  });

  return (
    <main className="flex flex-col items-center">
      <div className="max-w-5xl px-4">
        <Search setSearchItem={setSearchItem} />
        <section>
          <h1 className="py-12 lg:p-12 text-base text-center md:text-lg lg:text-3xl font-serif lg:mt-3">
            OVERLOAD MEATY PIZZA
          </h1>

          {/* pizza item cart selection */}
          <div className="">
            <div className="grid place-items-center grid-cols-2 gap-3 md:gap-12 lg:grid-cols-3 lg:gap-14 lg:pb-48 max-w-full">
              {filteredItems.map((item) => (
                <Item item={item} key={item.id} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
