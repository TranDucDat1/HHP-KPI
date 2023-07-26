import React from "react";
import Head from "next/head";

import Layout from "../../components/Layout"

export interface AboutPageAProps {}

export default function About(props: AboutPageAProps) {
  return (
    <>
      <Head>
        <title> About </title>
        <meta name="keywords" content="coders" />
      </Head>
      <Layout>
        
      </Layout>
    </>
  );
}
