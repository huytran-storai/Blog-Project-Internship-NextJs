import React from "react";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";
import Sendmail from "./_child/sendmail";
export default function footer() {
  const bg = {
    background: "url('/images/footer.png') no-repeat",
    backgroundPosition: "bottom",
  };
  return (
    <footer className="bg-gray-50" style={bg}>
      <Sendmail></Sendmail>
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}>
              <ImFacebook color="#888888" />
            </Link>
            <Link href={"/"}>
              <ImTwitter color="#888888" />
            </Link>
            <Link href={"/"}>
              {" "}
              <ImYoutube color="#888888" />
            </Link>
          </div>
          <p className="py-5 text-gray-400">
            Copyright © 2023 by Harry Tran Sy Huy
          </p>
          <p className="py-5 text-gray-400 text-center"> Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}
