import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";
import flowRight from 'lodash/flowRight';

import nextI18NextInstance from '../../../../i18n';
import { getCurrentLang } from '../../../lib/utils';

const { withTranslation } = nextI18NextInstance;

const UserDetails = ({ t, userDetails }) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={userDetails.avatar}
          alt={userDetails.name}
          width="110"
        />
      </div>
      <h4 className="mb-0">{userDetails.name}</h4>
      <span className="text-muted d-block mb-2">{userDetails.jobTitle}</span>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="px-4">
        <div className="progress-wrapper">
          <strong className="text-muted d-block mb-2">
            Next Badge : {userDetails.badge === 0 ? 'Bronze' : userDetails.badge === 1 ? 'Silver' : userDetails.badge === 2 ? 'Gold' : null}
          </strong>
          <Progress
            className="progress-sm"
            value={userDetails.performanceReportValue}
          >
            <span className="progress-value">
              {userDetails.performanceReportValue}%
            </span>
          </Progress>
        </div>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          Description
        </strong>
        <span>{userDetails.bio}</span>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          Stats
        </strong>
        <div>
          <span>Likes: {userDetails.likes.length}</span>
        </div>
        <div>
          <span>Dislikes: {userDetails.dislikes.length}</span>
        </div>
        <div>
          <span>Contributions: {userDetails.contributions.length}</span>
        </div>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

export default flowRight(
  withTranslation(['common'])
)(UserDetails);