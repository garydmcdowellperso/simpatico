import React from "react";
import PropTypes from "prop-types";
import flowRight from 'lodash/flowRight';
import { Box, Heading, Select } from "grommet";
import { Menu } from "grommet-icons";
import { useSelector } from 'react-redux'

import nextI18NextInstance from '../../i18n';

const { withTranslation } = nextI18NextInstance;

const getCurrentLang = () => nextI18NextInstance.i18n.language || 'en';

function Nav(props) {
  const { module } = useSelector(state => state.module);

  const { onClick } = props;

  console.log('module nav', getCurrentLang())

  return (
    <Box direction="row" justify='between'>
      <Box direction="row" justify="start">
        <Heading margin="none">{module.title[getCurrentLang()]}</Heading>
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
