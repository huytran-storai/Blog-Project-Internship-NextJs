import React from "react";

import Footer from "../components/footer";
import Head from "next/head";
export default function format({ children }: any) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <main>{children}</main>
      <Footer />
    </>
  );
}
