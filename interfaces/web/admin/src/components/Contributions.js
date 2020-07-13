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
              <Link href={`/admin/profile?userId=${contribution.uid}`}>
                <a><img src={contribution.avatar} alt={contribution.user} /></a>
              </Link>
            </div>

            {/* Content */}
            <div className="blog-comments__content">
              {/* Content :: Title */}
              <div className="blog-comments__meta text-mutes">
                <Link href={`/thread/?module=${contribution.module}#${contribution.id}`}>
                  <a className="text-secondary">
                    {contribution.user}
                  </a>
                </Link>{" "}
                <a className="text-secondary" href={`/thread/?module=${contribution.module}#${contribution.id}`}>
                  {contribution.title}
                </a>
                <span className="text-mutes"> - {contribution.timestamp}</span>
              </div>

              {/* Content :: Body */}
              <span dangerouslySetInnerHTML={{__html: contribution.contents}} />
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  )
}

export default Contributions;
