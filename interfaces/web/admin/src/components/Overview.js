import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";
import { useDispatch, useSelector } from 'react-redux'

import PageTitle from "./common/PageTitle";
import SmallStats from "./common/SmallStats";
import UsersOverview from "./blog/UsersOverview";
import UsersByDevice from "./blog/UsersByDevice";
import Discussions from "./blog/Discussions";
import TopReferrals from "./common/TopReferrals";
import ActionableItems from "./blog/ActionableItems";
import Placeholder from "./common/Placeholder";

import { fetchStatsRequest } from "../actions/stats";

export default function Overview(props) {
  const dispatch = useDispatch();

  // First time effect
  useEffect(() => {
    // Go and get some data
    dispatch(fetchStatsRequest());
  }, []);

  const smallStats = useSelector(state => state.stats.stats)
  //const smallStats = [];
  const placeholder = [1, 2, 3, 4, 5];

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle title="Overview" subtitle="Dashboard" className="text-sm-left mb-3" />
      </Row>

      {/* Small Stats Blocks */}
      {smallStats.length > 0 ?
      (<Row>
        {smallStats.map((stats, idx) => (
          <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
            <SmallStats
              id={`small-stats-${idx}`}
              variation="1"
              chartData={stats.datasets}
              chartLabels={stats.chartLabels}
              label={stats.label}
              value={stats.value}
              percentage={stats.percentage}
              increase={stats.increase}
              decrease={stats.decrease}
            />
          </Col>
        ))}
      </Row>) :
      (<Row>
        {placeholder.map((stats, idx) => (
          <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
            <Placeholder />
          </Col>
        ))}
      </Row>)
    }      

      <Row>
        {/* Users Overview */}
        <Col lg="8" md="12" sm="12" className="mb-4">
          <UsersOverview />
        </Col>

        {/* Users by Device */}
        <Col lg="4" md="6" sm="12" className="mb-4">
          <UsersByDevice />
        </Col>
      </Row>
      <Row>
        {/* Discussions */}
        <Col lg="5" md="12" sm="12" className="mb-4">
          <Discussions />
        </Col>

        {/* Top Referrals */}
        <Col lg="4" md="12" sm="12" className="mb-4">
          <TopReferrals />
        </Col>

        {/* Actionable items */}
        <Col lg="6" md="12" sm="12" className="mb-4">
          <ActionableItems />
        </Col>

      </Row>
    </Container>
  )
}

Overview.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};
