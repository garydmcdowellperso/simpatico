import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Typography from "@material-ui/core/Typography";
import Link from 'next/link'
import { useSelector } from 'react-redux'
import flowRight from 'lodash/flowRight';

import nextI18NextInstance from '../../i18n';
import UserMenu from "./UserMenu";
import Share from "./Share";

const { withTranslation } = nextI18NextInstance;

const getCurrentLang = () => nextI18NextInstance.i18n.language || 'en';

console.log('getCurrentLang = ()', getCurrentLang = ())
const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-around",
    width: "80%",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
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

function Header(props) {
  const [shareOpen, setShareOpen] = useState(false);
  const classes = useStyles();

  const { header, title, selected, t } = props;

  function handleShareClose() {
    setShareOpen(false);
  }

  const { firstName } = useSelector(state => state.auth);

  return (
    <>
      <Toolbar className={classes.toolbar}>
        {header.share ? (
          <>
          <Button onClick={()=> {
            setShareOpen(true);
                      }}
            size="small"
            >{t('share')}</Button>
          <Share open={shareOpen} handleClose={handleShareClose} />
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            {title}
          </Typography></> ) : null }
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        {!firstName ?
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              window.location = "/login/";
            }}
          >
            {t('signin')}
          </Button>
        : <UserMenu firstNameDisplay={firstName}/>}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        <Link
          href="/home/"
        >
          <a className={selected === 'home' ? classes.linkSelected : classes.link}>{t('home')}</a>
        </Link>
        {header.sections.map((section, idx) => (
          <Link
            key={idx}
            href={{ pathname: 'cmspage', query: { page: section.page, title: section.languages[getCurrentLang()] } }}
          >
            <a className={selected === section.languages[getCurrentLang()] ? classes.linkSelected : classes.link}>{section.languages[getCurrentLang()]}</a>
          </Link>
        ))}
      </Toolbar>
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string
};

export default flowRight(
  withTranslation(['common'])
)(Header);