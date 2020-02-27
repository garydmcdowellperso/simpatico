import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { useDispatch, useSelector } from 'react-redux'

import UserMenu from "./UserMenu";
import { fetchUserInfo } from "../actions/auth";

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
  }
}));

export default function Header(props) {
  const [firstNameDisplay, setFirstNameDisplay] = useState();
  const classes = useStyles();
  const { sections, title } = props;
  const dispatch = useDispatch();
  let firstNameLocalStorage;

  const { isValidToken, firstName } = useSelector(state => state.auth);

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
     setFirstNameDisplay();
   }
  }, [isValidToken]);

  useEffect(() => {
    // Set localstorage for other apps but also update our local state to force render
    localStorage.setItem("firstName", firstName);
    setFirstNameDisplay(firstName);
  }, [firstName]);

  return (
    <>
      <Toolbar className={classes.toolbar}>
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
        </Typography>
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
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
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
