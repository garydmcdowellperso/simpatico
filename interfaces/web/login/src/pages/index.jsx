import React from "react";
import Head from "next/head";

import Login from "../components/login";

const Home = (debate) => {
  return (
    <div className='content'>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>
      <Login debate={debate}/>
    </div>
  );
};

export default Home;
