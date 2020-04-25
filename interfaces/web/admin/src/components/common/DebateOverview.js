import React from "react";
import { Card, CardBody } from "shards-react";
import Link from 'next/link'
import classNames from "classnames";

const DebateOverview = (props) => {
  const { variation, debate } = props;

  console.log('props', props)
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
    "stats-small__data",
    variation !== "1" && "text-right align-items-center"
  );

  return (
    <Card small className={cardClasses}>
      <CardBody className={cardBodyClasses}>
        <div className={innerWrapperClasses}>
          <div className={dataFieldClasses}>
            <span className={labelClasses}>{debate.name}</span>
            <h6 className={valueClasses}>{debate.slug}</h6>
          </div>
          <div className={innerDataFieldClasses}>
            <Link href={{ pathname: '/admin/debate', query: { name: debate.name } }}>
              <span>Configure</span>
            </Link>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default DebateOverview;
