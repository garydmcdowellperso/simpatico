import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

import { fetchUserInfo } from "../../../../actions/auth";

function UserActions(props) {
  const [isVisible, setIsVisible] = useState();
  const [firstNameDisplay, setFirstNameDisplay] = useState("");
  let firstNameLocalStorage;

  const dispatch = useDispatch();
  if (typeof window !== 'undefined') {
    // Server side rendering protection
    firstNameLocalStorage = localStorage.getItem("firstName");
  }

  const { isValidToken, firstName, lastName, avatar } = useSelector(state => state.auth);

  function toggleUserActions() {
    setIsVisible(!isVisible)
  }
  
  // When isValidToken changes
  useEffect(() => {
    if (isValidToken) {
      // So the token is present and valid, do I have the user details?
      dispatch(fetchUserInfo());

      if (firstNameLocalStorage) {
        setFirstNameDisplay(firstNameLocalStorage)
      }
    }
  }, [isValidToken]);


  useEffect(() => {
    if (firstName !== "") {
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      setFirstNameDisplay(firstName);
    }
  }, [firstName]);

  return (
    <NavItem tag={Dropdown} caret toggle={() => {
      toggleUserActions()
    }}>
      <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
        {avatar ?
        (<img
          className="user-avatar rounded-circle mr-2"
          src={avatar}
          alt="User Avatar"
        />) : null }
        <span className="d-none d-md-inline-block">{firstNameDisplay}</span>
      </DropdownToggle>
      <Collapse tag={DropdownMenu} right small open={isVisible}>
        <DropdownItem to="user-profile" onClick={() => {
          window.location.href='/profile/';
        }}>
          <i className="material-icons">&#xE7FD;</i> Profile
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem className="text-danger">
          <i className="material-icons text-danger">&#xE879;</i> <Link href="/connect/"><a>Logout</a></Link>
        </DropdownItem>
      </Collapse>
    </NavItem>
  );
}

export default UserActions;