import React, { Component } from "react";
import Head from "next/head";

import Create from "../components/create";

const Signup = (props) => {
  return (
    <div>
      <Head>
        <title>Simpatico Signup</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>
      <Create />
    </div>
  );
};

export default Signup;
