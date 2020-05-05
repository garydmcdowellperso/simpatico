import React, { Component }  from "react";
import { Container, Row, Col } from "shards-react";
import flowRight from 'lodash/flowRight';
import { connect } from "react-redux";
import { withRouter } from "next/router"; 

import PageTitle from "./common/PageTitle";
import GeneralInfoModule from "./configure/module/GeneralInfoModule";

import nextI18NextInstance from '../../i18n';

const { withTranslation } = nextI18NextInstance;

class NewModule extends Component {
  render() {
    const { router: { query: { id, debateName, mode } } } = this.props;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Module Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle title="Module" subtitle={mode} className="text-sm-left mb-3" />
        </Row>
        <Row>
          <Col lg="12" md="12" sm="12" className="mb-4">
            <GeneralInfoModule mode={mode} id={id} debateName={debateName} />
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
)(NewModule);