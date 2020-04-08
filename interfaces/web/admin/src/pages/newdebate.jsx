import React from "react";
import Head from 'next/head';
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

import NewDebate from '../components/NewDebate';
import "../assets/shards-dashboards.1.1.0.min.css";

export default ({ noNavbar, noFooter }) => (
  <div>
    <Head>
      <title>Debate New</title>
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet" />
    </Head>
    <Container fluid>
      <Row>
        <MainSidebar />
        <Col
          className="main-content p-0"
          lg={{ size: 10, offset: 2 }}
          md={{ size: 9, offset: 3 }}
          sm="12"
          tag="main"
        >
          {!noNavbar && <MainNavbar />}
          <NewDebate />
          {!noFooter && <MainFooter />}
        </Col>
      </Row>
    </Container>
  </div>
);