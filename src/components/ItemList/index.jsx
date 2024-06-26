"use client";
import { React, useEffect, useState } from "react";
import { Item, Search } from "..";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "@/src/redux/actions/items/itemsAction";
import { Loader } from "../Customization";

export default function ItemList() {
  const dispatch = useDispatch();
  const [searchItem, setSearchItem] = useState("");
  const items = useSelector((state) => state.items);
  const itemsArray = Object.values(items)
    .flat()
    .filter((item) => item && typeof item === "object");
  const [loading, setLoading] = useState(true);

  // Array of object used before using API
  const pizzaItems = [
    {
      id: 1,
      discountTag: 45,
      name: "Arizona Cream",
      description: "Made in Creamy sauce, Chicken Tikka, Onion, Cheese",
      price: 749,
      discountedPrice: 547,
      // image: "/assets/pizzaImage.webp", //locally stored images
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

  // search your favourite pizza
  const filteredItems = itemsArray.filter((itemSearch) => {
    const itemName = itemSearch.name.toLowerCase();
    return itemName.startsWith(searchItem.toLowerCase());
  });

  useEffect(() => {
    dispatch(fetchItems());
    setLoading(false);
  }, []);

  // Future Implementation
  const categories = [
    {
      name: "deserts",
      description: "ice cream",
      items: filteredItems,
    },
    {
      name: "fastfood",
      description: "spicy pizza",
      items: filteredItems,
    },
  ];

  return (
    <>
      <Search setSearchItem={setSearchItem} />
      <main className="flex flex-col items-center mb-36">
        <div className="max-w-5xl px-6">
          {/* pizza item cart selection */}
          {loading ? (
            <Loader />
          ) : (
            <div className="grid place-items-center grid-cols-2 gap-3 md:gap-12 lg:grid-cols-3 lg:gap-14 lg:pb-48 max-w-full mt-7">
              {filteredItems.map((item) => (
                <Item item={item} key={item._id} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
