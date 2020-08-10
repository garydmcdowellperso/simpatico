import React, { Component }  from "react";
import { Container, Row, Col } from "shards-react";
import flowRight from 'lodash/flowRight';
import { connect } from "react-redux";

import PageTitle from "./common/PageTitle";
import DebateOverview from "./common/DebateOverview";
import SmallStatsCreate from "./common/SmallStatsCreate";

import nextI18NextInstance from '../../i18n';
import { deleteDebateRequest, fetchDebatesRequest } from "../actions/debate";

const { withTranslation } = nextI18NextInstance;

class Configure extends Component {
  componentDidMount() {
    const { dispatch } = this.props;    
    
    dispatch(
      fetchDebatesRequest()
    );
  }

  handleDeleteDebate = (debateId) => {
    const { dispatch } = this.props;    
    
    dispatch(
      deleteDebateRequest()
    );
  }

  render() {
    const { debate: { debates } } = this.props;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle title="Configure" subtitle="Dashboard" className="text-sm-left mb-3" />
        </Row>
    
        {/* Small Stats Blocks */}
        <Row>
          <Col className="col-lg mb-4">
              <SmallStatsCreate
                id={`small-stats-create`}
                variation="1"
              />
            </Col>
          {debates.map((debate, idx) => (
            <Col className="col-lg mb-4" key={idx} {...debate.attrs}>
              <DebateOverview id={`debate-${idx}`} variation={"1"} debate={debate} handleDeleteDebate={this.handleDeleteDebate}/>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

export default flowRight(
  connect(state => state),
  withTranslation(['common'])
)(Configure);