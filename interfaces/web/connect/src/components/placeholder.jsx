import React from "react";
import { Placeholder } from "semantic-ui-react";
import { Box } from "grommet";

const PlaceholderExamplePlaceholder = () => (
  <Box direction="row">
    <Box width="xlarge">
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
    </Box>
  </Box>
);

export default PlaceholderExamplePlaceholder;
