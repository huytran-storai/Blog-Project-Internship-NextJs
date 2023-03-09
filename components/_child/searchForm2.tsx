import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./author";
import fetcher from "../../lib/fetcher";
import Spinner from "./spinner";
import Error from "./error";
export default function SearchForm2({ searchValue }: any): JSX.Element {
  const { data, isLoading, isError } = fetcher("api/posts");
  const filteredData = data.filter((post: any) =>
    post.category.toLowerCase().includes(searchValue.toLowerCase())
  );
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
  return (
    <>
      {filteredData.length > 0 ? (
        filteredData.map((value: any, index: any) => {
          return <ShowPost data={value} key={index} />;
        })
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-gray-600">Sorry, no results</p>
        </div>
      )}
    </>
  );
}
interface Data {
  data: any;
}
function ShowPost({ data }: Data) {
  const { id, category, img } = data;
  return (
    <div className="flex gap-5 ">
      <div className="image pt-4 flex flex-col justify-start ">
        <Link href={`${id}`}>
          <Image
            src={img || ""}
            width={400}
            height={400}
            alt="food"
            className="rounded"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="title">
          <Link
            href={`${id}`}
            className="text-sm font-bold text-gray-800 hover:text-gray-600"
          >
            {category || ""}
          </Link>
          <Author></Author>
        </div>
      </div>
    </div>
  );
}
