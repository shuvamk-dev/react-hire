import React from "react";
import Home from "../components/home/index";
import Head from "next/head";

function Index() {
  return (
    <>
      <Head>
        <link rel="icon" href="react.png" type="image" sizes="16x16" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"
        ></link>
        <title>React Hire</title>
      </Head>
      <Home />
    </>
  );
}

export default Index;
