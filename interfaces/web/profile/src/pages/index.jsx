import React from "react";
import Head from "next/head";
import { Grommet } from "grommet";

import SlideOutSidebar from "../components/slideoutsidebar";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "../css/dash-min.css";

const isValidToken = true;

const UserProfileLite = () => (
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
      {isValidToken ? <SlideOutSidebar /> : <p>Processing</p>}
    </Grommet>
  </div>
);

export default UserProfileLite;