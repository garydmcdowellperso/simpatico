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
import Link from 'next/link'

function TopContributors(props) {

  const { title, contributors } = props;

  console.log('contributors', contributors)
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
                <Link href={`/admin/profile?userId=${contributor.id}`}>
                  <a><img src={contributor.avatar} alt={contributor.user} /></a>
                </Link>
              </div>

              <span className="text-semibold text-fiord-blue">{contributor.user}</span>
              <span className="ml-auto text-right text-semibold text-reagent-gray">
                {contributor.contributions}
              </span>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  )
}

export default TopContributors;
