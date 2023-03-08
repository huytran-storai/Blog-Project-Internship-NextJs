import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
export default function Section2(): JSX.Element {
  const { data, isLoading, isError } = fetcher("api/posts");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data &&
          data.map((value: any, index: any) => {
            return <Post data={value} key={index}></Post>;
          })}
      </div>
    </section>
  );
}
interface Data {
  data: any;
}
function Post({ data }: Data) {
  const { id, title, category, img, published, author } = data;
  return (
    <div className="item">
      <div className="images">
        <Link href={`posts/${id}`}>
          <Image src={img || "/"} width={500} height={600} alt="food" />
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
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title || ""}
          </Link>
          <p className="text-gray-500 py-3"></p>
          {author ? <Author {...author}></Author> : ""}
        </div>
      </div>
    </div>
  );
}
