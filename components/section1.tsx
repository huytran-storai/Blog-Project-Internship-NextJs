import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
export default function section1(): JSX.Element {
  SwiperCore.use([Autoplay]);
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };
  const { data, isLoading, isError } = fetcher("api/trending");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
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
          {data &&
            data.map((value: any, index: any) => {
              return (
                <SwiperSlide key={index}>
                  <Slide data={value}></Slide>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
}
interface Data {
  data: any;
}
function Slide({ data }: Data) {
  const { id, title, category, img, published, author, description } = data;
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={`posts/${id}`}>
          <Image
            src={img || `posts/${id}`}
            width={600}
            height={600}
            alt="food"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link
            href={`posts/${id}`}
            className="text-orange-600 hover:text-orange-800"
          >
            {category || ""}
          </Link>
          <Link
            href={`posts/${id}`}
            className="text-gray-800 hover:text-gray-500"
          >
            {published || ""}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`posts/${id}`}
            className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title || ""}
          </Link>
        </div>
        <p className="text-gray-500 py-3">{description || ""}</p>
        {author ? <Author {...author}></Author> : ""}
      </div>
    </div>
  );
}
