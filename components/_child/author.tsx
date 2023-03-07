import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function author() {
  return (
    <div className="author flex py-5">
      <Image
        src={"/images/huy.jpg"}
        alt="food"
        className="rounded-full"
        width={60}
        height={60}
      ></Image>
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"}>
          <span className="text-md font-bold text-gray-800 hover:text-gray-600">
            Tran Sy Huy
          </span>
        </Link>
        <span className="text-sm text-gray-500">Internship Frontend</span>
      </div>
    </div>
  );
}
