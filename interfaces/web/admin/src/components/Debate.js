import React, { Component }  from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";
import flowRight from 'lodash/flowRight';
import { connect } from "react-redux";
import { withRouter } from "next/router"; 

import PageTitle from "./common/PageTitle";
import LandingPage from "./configure/debate/LandingPage";
import Themes from "./configure/debate/Themes";
import GeneralInfo from "./configure/debate/GeneralInfo";
import Pages from "./configure/debate/Pages";

import nextI18NextInstance from '../../i18n';
import { fetchDebateRequest } from "../actions/debate";

const { withTranslation } = nextI18NextInstance;

class Debate extends Component {
  componentDidMount() {
    const { dispatch } = this.props;    
    const { router: { query: { name } } } = this.props;

    console.log('name', name)
    dispatch(
      fetchDebateRequest(name)
    );
  }

  render() {
    const { debate: { debate } } = this.props;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle title="Debate" subtitle="Configure" className="text-sm-left mb-3" />
        </Row>
    
        {/* Small Stats Blocks */}
        <Row>
          <Col lg="12" md="12" sm="12" className="mb-4">
            <GeneralInfo mode='update' debate={debate} />
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="6" className="mb-4">
            <Themes debate={debate} />
          </Col>
          <Col lg="6" md="6" sm="6" className="mb-4">
              <Pages debate={debate} />
          </Col>
        </Row>
        <Row>
          <Col lg="10" md="10" sm="10" className="mb-4">
            <LandingPage debate={debate} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default flowRight(
  connect(state => state),
  withRouter,
  withTranslation(['common'])
)(Debate);