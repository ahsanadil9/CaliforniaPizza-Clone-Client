import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Slider() {
  const Slider = [
    {
      id: 1,
      img: "https://californiapizza.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1682080604-Crazy-Deals-web.jpg&w=1920&q=75",
    },
    {
      id: 2,
      img: "https://californiapizza.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1696237013-sundae-banner.jpg&w=1920&q=75",
    },
    {
      id: 3,
      img: "https://californiapizza.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1685616864-Friendship-feast-web-banner.jpg&w=1920&q=75",
    },
    {
      id: 4,
      img: "https://californiapizza.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1696237013-sundae-banner.jpg&w=1920&q=75",
    },
    {
      id: 5,
      img: "https://californiapizza.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1682080604-Crazy-Deals-web.jpg&w=1920&q=75",
    },
  ];
  //remove after implementing ui
  const firstImage = Slider.find((slide) => slide.id == 1);
  return (
    <div className="flex flex-col mx-auto my-0">
      {firstImage && (
        <div className="h-5 w-11">
          <Image
            src={firstImage.img}
            alt="Slider Image"
            width="0"
            height="0"
            className="h-5 w-56"
          />
        </div>
      )}
    </div>

    // <div className="text-black">
    //   {Slider.map((slide) => (
    //     <div key={slide.id} className="">
    //       <Link href={"/"} className="">
    //         <Image
    //           src={slide.img}
    //           alt="Slider Image"
    //           width="100"
    //           height={100}
    //         />
    //       </Link>
    //     </div>
    //   ))}
    // </div>
  );
}
