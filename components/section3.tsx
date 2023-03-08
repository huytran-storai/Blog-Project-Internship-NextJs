import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
export default function section3(): JSX.Element {
  const { data, isLoading, isError } = fetcher("api/popular");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

      <Swiper
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {data &&
          data.map((value: any, index: any) => {
            return (
              <SwiperSlide key={index}>
                <Post data={value}></Post>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
}
interface Data {
  data: any;
}
function Post({ data }: Data) {
  const { id, title, category, img, published, author, description } = data;
  return (
    <div className="grid">
      <div className="images">
        <Link href={`posts/${id}`}>
          <Image
            src={img || `posts/${id}`}
            width={600}
            height={400}
            alt="food"
            className="rounded"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
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
            className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title || ""}
          </Link>
          <p className="text-gray-500 py-3">{description || ""}</p>
          {author ? <Author {...author}></Author> : ""}
        </div>
      </div>
    </div>
  );
}
