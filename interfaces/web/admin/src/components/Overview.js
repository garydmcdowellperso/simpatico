import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";
import { useDispatch, useSelector } from 'react-redux'

import PageTitle from "./common/PageTitle";
import SmallStats from "./common/SmallStats";
import UsersOverview from "./UsersOverview";
import UsersByDevice from "./UsersByDevice";
import Contributions from "./Contributions";
import TopContributors from "./TopContributors";
import Placeholder from "./common/Placeholder";

import { fetchUserInfo } from "../actions/auth";
import { fetchStatsRequest } from "../actions/stats";
import { fetchPostsRequest, fetchTopContributorsRequest } from "../actions/posts";

export default function Overview(props) {
  const dispatch = useDispatch();

  const { posts, pageviews, reactions, signups, shares } = useSelector(state => state.stats)
  const { isValidToken, accountId } = useSelector(state => state.auth)

  const contributions = useSelector(state => state.posts.posts)
  const contributors = useSelector(state => state.posts.contributors)

  // First time effect
  useEffect(() => {
    // We can only fetch all our data if we have requested our account info etc first
    dispatch(fetchUserInfo());
  }, []);

  useEffect(() => {
    if (accountId !== null) {      
      // Go and get some stats
      dispatch(fetchStatsRequest(accountId));

      // Go and get some posts
      dispatch(fetchPostsRequest(accountId));

      // Go and get some posts
      dispatch(fetchTopContributorsRequest(accountId));
    }
  }, [accountId]);

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

      {reactions ?
        (
          <Col className="col-lg mb-4" {...reactions.attrs}>
            <SmallStats
              id={`small-stats-reactions`}
              variation="1"
              chartData={reactions.datasets}
              chartLabels={reactions.chartLabels}
              label="Reactions"
              value={reactions.value}
              percentage={reactions.percentage}
              increase={reactions.increase}
              decrease={reactions.decrease}
            />
          </Col>
        ) :
        (
          <Col className="col-lg mb-4">
            <Placeholder />
          </Col>
        )
      } 

      {signups ?
        (
          <Col className="col-lg mb-4" {...signups.attrs}>
            <SmallStats
              id={`small-stats-signups`}
              variation="1"
              chartData={signups.datasets}
              chartLabels={signups.chartLabels}
              label="Signups"
              value={signups.value}
              percentage={signups.percentage}
              increase={signups.increase}
              decrease={signups.decrease}
            />
          </Col>
        ) :
        (
          <Col className="col-lg mb-4">
            <Placeholder />
          </Col>
        )
      } 

      {shares ?
        (
          <Col className="col-lg mb-4" {...shares.attrs}>
            <SmallStats
              id={`small-stats-shares`}
              variation="1"
              chartData={shares.datasets}
              chartLabels={shares.chartLabels}
              label="Shares"
              value={shares.value}
              percentage={shares.percentage}
              increase={shares.increase}
              decrease={shares.decrease}
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
          <UsersOverview title="Visitors by debate" />
        </Col>

        {/* Users by Device */}
        <Col lg="4" md="6" sm="12" className="mb-4">
          <UsersByDevice title="Users by Device"/>
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
