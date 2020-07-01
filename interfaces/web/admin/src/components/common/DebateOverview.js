import React from "react";
import { Card, CardBody, CardFooter, Row, Col, Tooltip } from "shards-react";
import Link from 'next/link'
import classNames from "classnames";

const DebateOverview = (props) => {
  const { variation, debate } = props;

  const cardClasses = classNames(
    "stats-small",
    variation && `stats-small--${variation}`
  );

  const cardBodyClasses = classNames(
    variation === "1" ? "p-0 d-flex" : "px-0 pb-0"
  );

  const innerWrapperClasses = classNames(
    "d-flex",
    variation === "1" ? "flex-column m-auto" : "px-3"
  );

  const dataFieldClasses = classNames(
    "stats-small__data",
    variation === "1" && "text-center"
  );

  const labelClasses = classNames(
    "stats-small__label",
    "text-uppercase",
    variation !== "1" && "mb-1"
  );

  const valueClasses = classNames(
    "stats-small__value",
    "count",
    variation === "1" ? "my-3" : "m-0"
  );

  const innerDataFieldClasses = classNames(
    "align-items-center"
  );

  const materialBig = classNames(
    "material-icons",
    "md-48"
  );

  return (
    <Card small className={cardClasses}>
      <CardBody className={cardBodyClasses}>
        <div className={innerWrapperClasses}>
          <div className={dataFieldClasses}>
            <span className={labelClasses}>{debate.name}</span>
            <h6 className={valueClasses}>{debate.slug}</h6>
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <Row>
          <Col className="col-lg mb-3">
            <Link href={{ pathname: '/admin/debate', query: { name: debate.name } }}>
              <a>
                <i className={materialBig}>build</i> Configure
              </a>
            </Link>
          </Col>
          <Col className="col-lg mb-3">
              <a href="/">
                <i className="material-icons">play_arrow</i> Goto
              </a>
          </Col>
          <Col className="col-lg mb-3">
              <a onClick={() => {
                console.log('pause')
              }}>
                <i className="material-icons">pause</i> Pause
              </a>
          </Col>
          <Col className="col-lg mb-3">
            <Link href={{ pathname: '/admin/clonedebate', query: { name: debate.name } }}>
              <a>
                <i className="material-icons">double_arrow</i> Clone
              </a>  
            </Link>
          </Col>
          <Col className="col-lg mb-3">
              <a onClick={() => {
                    console.log('delete')
                }}>
                <i className="material-icons" style={{color:'red'}}>delete</i> Delete
              </a>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  );
}

export default DebateOverview;
