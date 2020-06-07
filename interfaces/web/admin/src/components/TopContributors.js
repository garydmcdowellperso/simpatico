import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardFooter,
  Row,
  Col,
  FormSelect
} from "shards-react";

function TopContributors(props) {

  const { title, contributors } = props;

  return (
    <Card small>
      <CardHeader className="border-bottom">
        <h6 className="m-0">{title}</h6>
        <div className="block-handle" />
      </CardHeader>

      <CardBody className="p-0">
        <ListGroup small flush className="list-group-small">
          {contributors.map((contributor, idx) => (
            <ListGroupItem key={idx} className="d-flex px-3">
              {/* Avatar */}
              <div className="blog-comments__avatar mr-3">
                <img src={contributor.avatar} alt={contributor.user} />
              </div>

              <span className="text-semibold text-fiord-blue">{contributor.user}</span>
              <span className="ml-auto text-right text-semibold text-reagent-gray">
                {contributor.contributions}
              </span>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>

      <CardFooter className="border-top">
        <Row>
          {/* Time Span */}
          <Col>
            <FormSelect
              size="sm"
              value="last-week"
              style={{ maxWidth: "130px" }}
              onChange={() => {}}
            >
              <option value="last-week">All Time</option>
              <option value="last-week">Last Week</option>
              <option value="today">Today</option>
              <option value="last-month">Last Month</option>
              <option value="last-year">Last Year</option>
            </FormSelect>
          </Col>

          {/* View Full Report */}
          <Col className="text-right view-report">
            {/* eslint-disable-next-line */}
            <a href="#">Full report &rarr;</a>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  )
}

export default TopContributors;
