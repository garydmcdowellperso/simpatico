import React, { Component }  from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";
import flowRight from 'lodash/flowRight';
import { connect } from "react-redux";
import { withRouter } from "next/router"; 

import PageTitle from "./common/PageTitle";
import LandingPage from "./configure/debate/LandingPage";
import Modules from "./configure/debate/Modules";
import GeneralInfo from "./configure/debate/GeneralInfo";

import nextI18NextInstance from '../../i18n';
//import { fetchDebatesRequest } from "../actions/debate";

const { withTranslation } = nextI18NextInstance;

class NewDebate extends Component {
  componentDidMount() {
    const { dispatch } = this.props;    
    const { router: { query: { id } } } = this.props;

    console.log('id', id)
    /*
    dispatch(
      fetchDebateRequest()
    );
    */
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle title="Debate" subtitle="Configure" className="text-sm-left mb-3" />
        </Row>
    
        {/* Small Stats Blocks */}
        <Row>
          <Col lg="12" md="12" sm="12" className="mb-4">
            <GeneralInfo mode='create' />
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
)(NewDebate);