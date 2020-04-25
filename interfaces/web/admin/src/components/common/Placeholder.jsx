import React from "react";
import { Placeholder } from "semantic-ui-react";
import { Card, CardBody } from "shards-react";
import classNames from "classnames";

const PlaceholderExamplePlaceholder = ({ variation, label, value, percentage, increase }) => {
  const cardClasses = classNames(
    "stats-small",
    variation && `stats-small--${variation}`
  );
  const cardBodyClasses = classNames(
    variation === "1" ? "p-0 d-flex" : "px-0 pb-0"
  );
  
  return (
    <Card small className={cardClasses}>
      <CardBody className={cardBodyClasses}>
        <Placeholder fluid>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
        </Placeholder>
      </CardBody>
    </Card>
  );
}

export default PlaceholderExamplePlaceholder;
