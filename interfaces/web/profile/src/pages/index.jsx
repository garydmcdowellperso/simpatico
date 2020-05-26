import React from "react";
import Head from "next/head";
import { Grommet } from "grommet";

import SlideOutSidebar from "../components/slideoutsidebar";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "../css/dash-min.css";

const isValidToken = true;

function UserProfileLite(debate) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"></link>
      </Head>
      <Grommet>
        {isValidToken ? <SlideOutSidebar debate={debate} /> : <p>Processing</p>}
      </Grommet>
    </div>
  );
}

export default UserProfileLite;