import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col
} from "shards-react";
import Link from 'next/link'

function Contributions(props) {
  const { title, contributions } = props;

  console.log('contributions', contributions)
  return (
    <Card small className="blog-comments">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{title}</h6>
      </CardHeader>

      <CardBody className="p-0">
        {contributions.map((contribution, idx) => (
          <div key={idx} className="blog-comments__item d-flex p-3">
            {/* Avatar */}
            <div className="blog-comments__avatar mr-3">
              <img src={contribution.avatar} alt={contribution.user} />
            </div>

            {/* Content */}
            <div className="blog-comments__content">
              {/* Content :: Title */}
              <div className="blog-comments__meta text-mutes">
                <Link href="/">
                  <a className="text-secondary">
                    {contribution.user}
                  </a>
                </Link>{" "}
                <a className="text-secondary" href="">
                  {contribution.title}
                </a>
                <span className="text-mutes"> - {contribution.timestamp}</span>
              </div>

              {/* Content :: Body */}
              <span dangerouslySetInnerHTML={{__html: contribution.contents}} />

              {/* Content :: Actions */}
              <div className="blog-comments__actions">
                <ButtonGroup size="sm">
                  <Button theme="white">
                    <span className="text-success">
                      <i className="material-icons">check</i>
                    </span>{" "}
                    Approve
                  </Button>
                  <Button theme="white">
                    <span className="text-danger">
                      <i className="material-icons">clear</i>
                    </span>{" "}
                    Reject
                  </Button>
                  <Button theme="white">
                    <span className="text-light">
                      <i className="material-icons">more_vert</i>
                    </span>{" "}
                    Edit
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        ))}
      </CardBody>

      <CardFooter className="border-top">
        <Row>
          <Col className="text-center view-report">
            <Button theme="white" type="submit">
              View All Comments
            </Button>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  )
}

export default Contributions;
