import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";

import SlideOutSidebar from "../components/slideoutsidebar";
import { fetchAllPostsForModule, fetchPostsForModule } from "../actions/post";
import { fetchModuleRequest } from "../actions/module";

function Home(props) {
  const dispatch = useDispatch();

  const { isValidToken } = useSelector(state => state.auth)
  const { sort } = useSelector(state => state.post)

  useEffect(() => {
    const module = localStorage.getItem("module");

    if (!module) {
      return
    }

    // If we have arrived here with a hash then we need to load ALL the data
    // for the scrolling to work, but also remove it after the scrolling has finished!
    if (window.location.hash) {
      dispatch(
        fetchAllPostsForModule(module, sort)
      );
    } else {
      dispatch(
        fetchPostsForModule(module, 1, sort)
      );  
    }
    
    dispatch(
      fetchModuleRequest(module)
    );

  }, [sort]);

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/thread/static/favicon.ico" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>
      <SlideOutSidebar isValidToken={isValidToken} />
    </div>
  );
}

export default Home;
