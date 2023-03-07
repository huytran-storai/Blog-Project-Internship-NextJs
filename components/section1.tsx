import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
export default function section1(): JSX.Element {
  SwiperCore.use([Autoplay]);
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
        >
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          ...
        </Swiper>
      </div>
    </section>
  );
}
function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <Image
            src={"/images/pasta-salad.png"}
            width={600}
            height={600}
            alt="food"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            Miso Peanut Pasta Salad
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-500">
            - Mar 7, 2023
          </Link>
        </div>
        <div className="title">
          <Link
            href={"/"}
            className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"
          >
            A picnic-worthy pasta salad that subs mayonnaise for peanut sauce
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Combine peanut butter with miso until creamy, then add some spice with
          vinegar and chili garlic sauce, and finish with honey and sesame oil
          to take the edge off the sauce. Toss with elbow pasta, scallions,
          watermelon radish, carrots, broccoli florets, and chopped cilantro.
          Serve with chopped peanuts.
        </p>
        <Author></Author>
      </div>
      <div></div>
    </div>
  );
}
