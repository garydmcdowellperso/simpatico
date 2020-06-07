import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";
import { useDispatch, useSelector } from 'react-redux'

import PageTitle from "./common/PageTitle";
import SmallStats from "./common/SmallStats";
import UsersOverview from "./blog/UsersOverview";
import UsersByDevice from "./blog/UsersByDevice";
import Contributions from "./Contributions";
import TopContributors from "./TopContributors";
import ActionableItems from "./blog/ActionableItems";
import Placeholder from "./common/Placeholder";

import { fetchStatsRequest } from "../actions/stats";
import { fetchPostsRequest, fetchTopContributorsRequest } from "../actions/posts";

export default function Overview(props) {
  const dispatch = useDispatch();

  const posts = useSelector(state => state.stats.posts)
  const pageviews = useSelector(state => state.stats.pageviews)
  const isValidToken = useSelector(state => state.auth.isValidToken)

  const contributions = useSelector(state => state.posts.posts)
  const contributors = useSelector(state => state.posts.contributors)

  // First time effect
  useEffect(() => {
    // Go and get some stats
    dispatch(fetchStatsRequest(localStorage.getItem("accountId")));

    // Go and get some posts
    dispatch(fetchPostsRequest(localStorage.getItem("accountId")));

    // Go and get some posts
    dispatch(fetchTopContributorsRequest(localStorage.getItem("accountId")));

  }, []);

  useEffect(() => {
    if (isValidToken === false) {
      window.location.href = '/connect/';
    }
  }, [isValidToken]);
  

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle title="Overview" subtitle="Dashboard" className="text-sm-left mb-3" />
      </Row>

      <Row>
      {posts ?
        (
          <Col className="col-lg mb-4" {...posts.attrs}>
            <SmallStats
              id={`small-stats-posts`}
              variation="1"
              chartData={posts.datasets}
              chartLabels={posts.chartLabels}
              label="Posts"
              value={posts.value}
              percentage={posts.percentage}
              increase={posts.increase}
              decrease={posts.decrease}
            />
          </Col>
        ) :
        (
          <Col className="col-lg mb-4">
            <Placeholder />
          </Col>
        )
      }      

      {pageviews ?
        (
          <Col className="col-lg mb-4" {...pageviews.attrs}>
            <SmallStats
              id={`small-stats-pageviews`}
              variation="1"
              chartData={pageviews.datasets}
              chartLabels={pageviews.chartLabels}
              label="Page Views"
              value={pageviews.value}
              percentage={pageviews.percentage}
              increase={pageviews.increase}
              decrease={pageviews.decrease}
            />
          </Col>
        ) :
        (
          <Col className="col-lg mb-4">
            <Placeholder />
          </Col>
        )
      } 
      </Row>     
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
        {/* Contributions */}
        <Col lg="5" md="12" sm="12" className="mb-4">
          <Contributions title="Latest Contributions" contributions={contributions} />
        </Col>

        {/* Top Referrals */}
        <Col lg="4" md="12" sm="12" className="mb-4">
          <TopContributors title="Top Contributors" contributors={contributors} />
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
