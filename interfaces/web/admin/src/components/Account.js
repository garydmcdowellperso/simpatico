import React, { Component }  from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";
import flowRight from 'lodash/flowRight';
import { connect } from "react-redux";
import { withRouter } from "next/router"; 

import PageTitle from "./common/PageTitle";
import GeneralInfo from "./configure/account/GeneralInfo";

import nextI18NextInstance from '../../i18n';
import { fetchAccountRequest } from "../actions/account";

const { withTranslation } = nextI18NextInstance;

class Account extends Component {
  componentDidMount() {
    const { dispatch } = this.props;    

    if (localStorage.getItem("accountId")) {
      dispatch(
        fetchAccountRequest(localStorage.getItem("accountId"))
      );
    }
  }

  render() {
    const { account: { account } } = this.props;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle title="Account" subtitle="Configure" className="text-sm-left mb-3" />
        </Row>
    
        {/* Small Stats Blocks */}
        <Row>
          <Col lg="12" md="12" sm="12" className="mb-4">
            <GeneralInfo mode='update' account={account} />
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
)(Account);