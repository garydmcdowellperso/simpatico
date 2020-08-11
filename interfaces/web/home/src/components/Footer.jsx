import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'
import flowRight from 'lodash/flowRight';

import nextI18NextInstance from '../../i18n';

const { withTranslation } = nextI18NextInstance;

const getCurrentLang = () => nextI18NextInstance.i18n.language || 'en';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright ©
      <a href="https://simpatico.cloud/">
        Simpatico
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  },
  toolbarSecondary: {
    justifyContent: "space-around",
    overflowX: "auto"
  },
  linkSelected: {
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    lineHeight: '1.5',
    letterSpacing: '0.00938em',
    color: '#007bff'
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    lineHeight: '1.5',
    letterSpacing: '0.00938em'
  }
}));

function Footer(props) {
  const classes = useStyles();
  const { selected, footer } = props;

  return (
    <footer className={classes.footer}>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
      {footer.sections.map((section, idx) => {
        if (section.page) {
          return (<Link
            key={idx}
            href={{ pathname: 'cmspage', query: { page: section.page, title: section.languages[getCurrentLang()] } }}
          >
            <a className={selected === section.languages[getCurrentLang()] ? classes.linkSelected : classes.link}>{section.languages[getCurrentLang()]}</a>
          </Link>)
        }
      })}
      </Toolbar>
      <Copyright />
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
};

export default flowRight(
  withTranslation(['common'])
)(Footer);