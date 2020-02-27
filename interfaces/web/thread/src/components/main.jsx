import React, { Component } from 'react'
import { Box, Grid, Grommet } from "grommet";
import PropTypes from "prop-types";
import Nav from "../components/nav";
import Thread from "../components/thread";
import Placeholder from "../components/placeholder";
import TopPost from "../components/toppost";

const Main = ({ onClick }) => {
  const loading = true;

  return (
    <Grid
      fill
      rows={["xxsmall", "flex"]}
      columns={["xsmall", "flex", "xsmall"]}
      gap="small"
      areas={[
        { name: "header", start: [0, 0], end: [2, 0] },
        { name: "left", start: [0, 1], end: [0, 1] },
        { name: "middle", start: [1, 1], end: [1, 1] },
        { name: "right", start: [2, 1], end: [2, 1] }
      ]}
    >
      <Box gridArea="header">
        <Nav onClick={onClick} />
      </Box>
      <Box gridArea="left" background="light-5" />
      <Box gridArea="middle" background="light-2">
        <Box
          border={{ color: "brand", size: "large" }}
          pad="medium"
          flex="grow"
        >
          <TopPost />
        </Box>
        <Box pad="medium" flex="grow">
          {loading ? <Placeholder /> : null}
          <Thread />
        </Box>
      </Box>
      <Box gridArea="right" background="light-3" />
    </Grid>
  );
};

Main.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Main;
