import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./author";
import fetcher from "../../lib/fetcher";
import Spinner from "./spinner";
import Error from "./error";
export default function Related(): JSX.Element {
  const { data, isLoading, isError } = fetcher("api/posts");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>
      <div className="flex flex-col gap-10">
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
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`${id}`}>
          <Image
            src={img || "/"}
            width={300}
            height={200}
            alt="food"
            className="rounded"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link
            href={`${id}`}
            className="text-orange-600 hover:text-orange-800"
          >
            {title || ""}
          </Link>
          <Link href={`${id}`} className="text-gray-800 hover:text-gray-500">
            {published || ""}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`${id}`}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            {category || ""}
          </Link>

          {author ? <Author {...author}></Author> : ""}
        </div>
      </div>
    </div>
  );
}
