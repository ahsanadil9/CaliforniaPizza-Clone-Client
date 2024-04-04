"use client";
import { React, useState } from "react";
import { Item, Search } from "..";
import { useSelector } from "react-redux";
import { selectCartItems } from "@/src/redux/slices/cartSlice";
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
      // image: "/assets/pizzaImage.webp",
      image:
        "https://californiapizza.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1696497545-4-min.jpeg&w=384&q=75",
      quantity: 1,
    },
    {
      id: 2,
      discountTag: 30,
      name: "Mighty Mexicana",
      description:
        "Made in Tomato sauce, Shredded chicken, Onions, Capsicum, Cheese",
      price: 499,
      discountedPrice: 347,
      //image: "/assets/pizzaImage.webp",
      image:
        "https://californiapizza.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1696519074-1696499917-1-min.jpeg&w=384&q=75",
      quantity: 1,
    },
    {
      id: 3,
      discountTag: 25,
      name: "Cheese Burst",
      description:
        "Made in Tomato sauce, Mozzarella cheese, Cheese burst crust",
      price: 649,
      discountedPrice: 500,
      //image: "/assets/pizzaImage.webp",
      image:
        "https://californiapizza.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1678281836-Mexican%20treat.jpg&w=384&q=75",
      quantity: 1,
    },
    {
      id: 4,
      discountTag: 35,
      name: "Burst Hot Pizza",
      description: "Mozzarella cheese, Cheese burst crust",
      price: 649,
      discountedPrice: 550,
      //image: "/assets/pizzaImage.webp",
      image:
        "https://californiapizza.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1678280608-Detroit%20pepperoni%20lar.jpg&w=384&q=75",
      quantity: 1,
    },
    {
      id: 5,
      discountTag: 30,
      name: "Double The Fun - Large Pizza",
      description: "2 Large Pizza (Meat Fiesta Flavours), Mozzarella cheese",
      price: 599,
      discountedPrice: 430,
      //image: "/assets/pizzaImage.webp",
      image:
        "https://californiapizza.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1677844823-2%20large%20pizza-min.jpg&w=384&q=75",
      quantity: 1,
    },
    {
      id: 6,
      discountTag: 30,
      name: "Spicy Cheesy Pizza",
      description: "Made in Masala Mirch sauce with cheese",
      price: 599,
      discountedPrice: 430,
      //image: "/assets/pizzaImage.webp",
      image:
        "https://californiapizza.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1679519485-sdg.jpg&w=384&q=75",
      quantity: 1,
    },
    {
      id: 7,
      discountTag: 30,
      name: "BBQ Tikka Pizza",
      description: "Made in Hot Sauce with Cheese flavour",
      price: 599,
      discountedPrice: 430,
      //image: "/assets/pizzaImage.webp",
      image:
        "https://californiapizza.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1677915253-Cheese%20And%20Pepporoni.jpg&w=384&q=75",
      quantity: 1,
    },
  ];

  // to search your favourite pizza
  const filteredItems = pizzaItems.filter((itemSearch) => {
    const itemName = itemSearch.name.toLowerCase();
    return itemName.startsWith(searchItem.toLowerCase());
  });

  const categories = [{
    name: "deserts",
    description: "ice cream",
    items: filteredItems
  },
{
  name: "fastfood",
  description: "spicy pizza",
  items: filteredItems
}]

  return (
    <main className="flex flex-col items-center mb-36">
      <div className="max-w-5xl px-4">
        <Search setSearchItem={setSearchItem} />
        {categories.map(category => (
          <section>
            <h1 className="py-6 font-serif text-base text-center md:text-2xl lg:p-12 lg:text-3xl lg:mt-3">
            {category.name}
            </h1>

            {/* pizza item cart selection */}

            <div className="grid place-items-center grid-cols-2 gap-3 md:gap-12 lg:grid-cols-3 lg:gap-14 lg:pb-48 max-w-full">
              {category.items.map((item) => (
                <Item item={item} key={item.id} />
              ))}
            </div>
          </section>
        ))}

      </div>
    </main>
  );
}
