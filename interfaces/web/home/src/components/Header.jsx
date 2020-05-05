import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import nextI18NextInstance from '../../i18n';

import UserMenu from "./UserMenu";
import { fetchUserInfo } from "../actions/auth";

const getCurrentLang = () => nextI18NextInstance.i18n.language || 'en';

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

export default function Header(props) {
  const [firstNameDisplay, setFirstNameDisplay] = useState();
  const classes = useStyles();

  const { header, title, selected } = props;
  
  console.log('header', header.sections)
  
  const dispatch = useDispatch();
  let firstNameLocalStorage;

  const { firstName, lastName, id, isValidToken, token } = useSelector(state => state.auth);

  if (typeof window !== 'undefined') {
    // Server side rendering protection
    firstNameLocalStorage = localStorage.getItem("firstName");
  }
  // First time effect
  useEffect(() => {
    // Pull info from local storage if available
    if (firstNameLocalStorage) {
      setFirstNameDisplay(firstNameLocalStorage);
    }
  }, []);


  // First time effect and when isValidToken changes
  useEffect(() => {
   if (isValidToken) {
     // So the token is present and valid, do I have the user details?
     if (!firstNameLocalStorage) {
       dispatch(fetchUserInfo());
     }
   }
   // Sorry token no longer valid, get rid of display name for login
   if (isValidToken) {
     if (firstNameLocalStorage) {
      setFirstNameDisplay();
     }
   }
   localStorage.setItem("token", token);
  }, [isValidToken]);

  useEffect(() => {
    // Set localstorage for other apps but also update our local state to force render
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("uid", id);
    setFirstNameDisplay(firstName);
  }, [firstName]);

  return (
    <>
      <Toolbar className={classes.toolbar}>
        {header.share ? (
          <>
          <Button size="small">Share</Button>
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
        {!firstNameDisplay ?
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              window.location = "/connect/";
            }}
          >
            {`Sign up / Sign in`}
          </Button>
        : <UserMenu firstNameDisplay={firstNameDisplay}/>}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        <Link
          href="/"
        >
          <a className={selected === 'home' ? classes.linkSelected : classes.link}>Home</a>
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
