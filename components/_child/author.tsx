import React from "react";
import Image from "next/image";
import Link from "next/link";
interface IAuthor {
  name?: string;
  img?: string;
  designation?: string;
}
export default function author({ name, img, designation }: IAuthor) {
  if (!name && !img) return <></>;
  return (
    <div className="author flex py-5">
      <Image
        src={img || ""}
        alt="food"
        className="rounded-full"
        width={60}
        height={60}
      ></Image>
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"}>
          <span className="text-md font-bold text-gray-800 hover:text-gray-600">
            {name || ""}
          </span>
        </Link>
        <span className="text-sm text-gray-500"> {designation || ""}</span>
      </div>
    </div>
  );
}
