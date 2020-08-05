import React, { Component } from "react";
import Head from "next/head";

import Password from "../components/password";

const Forgotten = (debate) => {
  return (
    <div>
      <Head>
        <title>Forgotten Password</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>
      <Password debate={debate} />
    </div>
  );
};

export default Forgotten;
