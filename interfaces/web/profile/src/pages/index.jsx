import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/PageTitle";
import UserDetails from "../components/UserDetails";
import UserAccountDetails from "../components/UserAccountDetails";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "../css/dash-min.css";

const userDetails = {
  name: localStorage.getItem("firstName"),
  avatar: "https://i.pravatar.cc/100?img=12",
  jobTitle: "Project Manager",
  performanceReportTitle: "Next Badge",
  performanceReportValue: 74,
  metaTitle: "Description",
  bio:
    "Intrested in changing the world"
};


const UserProfileLite = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="User Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="4">
        <UserDetails userDetails ={userDetails} />
      </Col>
      <Col lg="8">
        <UserAccountDetails />
      </Col>
    </Row>
  </Container>
);


export default UserProfileLite;