import React from "react";
import Head from "next/head";
export interface AboutPageAProps {}

export default function About(props: AboutPageAProps) {
  return (
    <>
      <Head>
        <title> About </title>
        <meta name="keywords" content="coders" />
      </Head>
        <h1> Theo dõi kpi đơn mục tiêu </h1>
        <p> Lorem ipsum dolor</p>
        <p> Lorem ipsum dolor</p>
    </>
  );
}
