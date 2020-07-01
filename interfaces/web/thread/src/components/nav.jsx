import React from "react";
import PropTypes from "prop-types";
import flowRight from 'lodash/flowRight';
import { Box, Heading } from "grommet";
import { Menu } from "grommet-icons";
import { Placeholder } from "semantic-ui-react";

import nextI18NextInstance from '../../i18n';

const { withTranslation } = nextI18NextInstance;

const getCurrentLang = () => nextI18NextInstance.i18n.language || 'en';

function Nav(props) {
  const { onClick, module } = props;

  return (
    <Box direction="row" justify='between'>
      <Box direction="row" justify="start">
        {module ?
          (<Heading margin="none">{module.title[getCurrentLang()]}</Heading>) :
          (<Heading margin="none"><Placeholder fluid><Placeholder.Line length='short' /></Placeholder></Heading>)
        }
      </Box>
      <Box direction="row" justify="end">
        <Menu color="plain" onClick={onClick} />
      </Box>
    </Box>
  )
}

Nav.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default flowRight(
  withTranslation(['common'])
)(Nav);
