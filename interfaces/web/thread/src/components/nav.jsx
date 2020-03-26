import React, { useState } from "react";
import PropTypes from "prop-types";
import flowRight from 'lodash/flowRight';
import { Box, Heading, Select } from "grommet";
import { Menu } from "grommet-icons";
import { useSelector } from 'react-redux'

import nextI18NextInstance from '../../i18n';

const { withTranslation } = nextI18NextInstance;

const getCurrentLang = () => nextI18NextInstance.i18n.language || '';

function Nav(props) {
  let translation = {};
  const { thread } = useSelector(state => state.thread);

  const { onClick, t } = props;

  // Find translations
  if (thread) {
    const langLength = thread.languages.length;
    for (let x = 0; x < langLength; x += 1) {
      if (thread.languages[x].code === getCurrentLang()) {
        translation = thread.languages[x];
      }
    }
  }

  return (
    <Box direction="row" justify='between'>
      <Box direction="row" justify="start">
        <Heading margin="none">{translation.title}</Heading>
      </Box>
      <Box direction="row">
        <Select
          options={['en', 'fr', 'es']}
          value={getCurrentLang()}
          onChange={( { option } ) => {
            nextI18NextInstance.i18n.changeLanguage(option);
          }}
        />
      </Box>
      <Box direction="row" justify="end">
        <Menu color="plain" onClick={onClick} />
      </Box>
    </Box>
  )
}

Nav.propTypes = {
  onClick: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default flowRight(
  withTranslation(['common'])
)(Nav);
