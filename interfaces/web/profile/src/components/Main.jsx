import React from "react";
import { Container, Row, Col } from "shards-react";
import { Box } from "grommet";

import PageTitle from "./PageTitle";
import UserDetails from "./UserDetails";
import UserAccountDetails from "./UserAccountDetails";
import Nav from "./nav";

const userDetails = {
    name: (typeof window !== 'undefined') ? localStorage.getItem("firstName") : '',
    avatar: "https://i.pravatar.cc/100?img=12",
    jobTitle: "Project Manager",
    performanceReportTitle: "Next Badge",
    performanceReportValue: 74,
    metaTitle: "Description",
    bio:
      "Intrested in changing the world"
};
  
const Main = ({ onClick }) => (
    <Container fluid className="main-content-container px-4">
        <Box gridArea="header">
            <Nav onClick={onClick} />
        </Box>

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
  )

  export default Main;
