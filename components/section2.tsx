import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";

export default function Section2(): JSX.Element {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {Post()} {Post()} {Post()} {Post()} {Post()} {Post()}
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/images/pasta-salad.png"}
            width={600}
            height={600}
            alt="food"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
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
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            A picnic-worthy pasta salad that subs mayonnaise for peanut sauce
          </Link>
          <p className="text-gray-500 py-3">
            Combine peanut butter with miso until creamy, then add some spice
            with vinegar and chili garlic sauce, and finish with honey and
            sesame oil to take the edge off the sauce. Toss with elbow pasta,
            scallions, watermelon radish, carrots.
          </p>
          <Author></Author>
        </div>
      </div>
    </div>
  );
}
