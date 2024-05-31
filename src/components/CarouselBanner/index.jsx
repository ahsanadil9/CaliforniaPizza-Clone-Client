"use client";
import React, { Component } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class CarouselBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Banner: [
        {
          id: 1,
          img: "https://californiapizza.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1685616864-Friendship-feast-web-banner.jpg&w=1920&q=75",
        },
        {
          id: 2,
          img: "https://californiapizza.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1696237013-sundae-banner.jpg&w=1920&q=75",
        },
        {
          id: 3,
          img: "https://californiapizza.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1682080604-Crazy-Deals-web.jpg&w=1920&q=75",
        },
        {
          id: 4,
          img: "https://californiapizza.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1696237013-sundae-banner.jpg&w=1920&q=75",
        },
        {
          id: 5,
          img: "https://californiapizza.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1691502249-Mascot-Web-Banner-(1).jpg&w=1920&q=75",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Carousel
          showThumbs={false}
          dynamicHeight={true}
          infiniteLoop={false}
          interval={1000}
        >
          {this.state.Banner.map((slider) => (
            <div key={slider.id}>
              <Image
                src={slider.img}
                width={1920}
                height={500}
                alt="banner image"
                priority
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default CarouselBanner;
