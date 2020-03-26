import React from "react";
import PropTypes from "prop-types";

import { Box } from "grommet";
import { Menu } from "grommet-icons";

const Nav = ({ onClick }) => (
  <Box direction="row" pad="small" justify="end">
    <Menu color="plain" onClick={onClick} />
  </Box>
);

Nav.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Nav;
