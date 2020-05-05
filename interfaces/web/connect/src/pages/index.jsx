import React, { Component } from "react";
import Head from "next/head";
import { Grommet, ResponsiveContext } from "grommet";

import Login from "../components/login";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>
      <Grommet>
        <Login />
      </Grommet>
    </div>
  );
};

export default Home;
