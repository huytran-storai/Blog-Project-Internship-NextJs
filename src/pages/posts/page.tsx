import React from "react";
import Format from "../../../layout/format";
import Author from "../../../components/_child/author";
import Image from "next/image";
import Related from "../../../components/_child/related";
export default function page(): JSX.Element {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author></Author>
        </div>
        <div className="post-py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            Combine peanut butter with miso until creamy, then add some spice
            with vinegar and chili garlic sauce, and finish with honey and
            sesame oil to take the edge off the sauce.
          </h1>
          <p className="text-gray-500 text-xl text-center">
            Toss with elbow pasta, scallions, watermelon radish,carrots, vinegar
            and chili garlic sauce, and finish with honey
          </p>
          <div className="py-10">
            <Image
              src={"/images/pasta-salad.png"}
              width={900}
              height={600}
              alt="food"
            ></Image>
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            <p>
              Toss with elbow pasta, scallions, watermelon radish,carrots,
              vinegar and chili garlic sauce, and finish with honey
            </p>
            <p>
              Toss with elbow pasta, scallions, watermelon radish,carrots,
              vinegar and chili garlic sauce, and finish with honey
            </p>
            <p>
              Toss with elbow pasta, scallions, watermelon radish,carrots,
              vinegar and chili garlic sauce, and finish with honey
            </p>
            <p>
              Toss with elbow pasta, scallions, watermelon radish,carrots,
              vinegar and chili garlic sauce, and finish with honey
            </p>
            <p>
              Toss with elbow pasta, scallions, watermelon radish,carrots,
              vinegar and chili garlic sauce, and finish with honey
            </p>
          </div>
        </div>
        <Related></Related>
      </section>
    </Format>
  );
}
