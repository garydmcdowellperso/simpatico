import React, { Component } from "react";
import Head from "next/head";

import ChangePassword from "../components/changepassword";

const Change = (props) => {
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
      <ChangePassword />
    </div>
  );
};

export default Change;
