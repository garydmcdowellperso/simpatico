import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import flowRight from 'lodash/flowRight';
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux'

import Main from "./main";
import nextI18NextInstance from '../../i18n';
import { fetchUserInfo } from "../actions/auth";

const { withTranslation } = nextI18NextInstance;

const SlideOutSidebar = ({ isValidToken, t }) => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  let firstNameLocalStorage;

  const { firstName, token } = useSelector(state => state.auth);

  if (typeof window !== 'undefined') {
    // Server side rendering protection
    firstNameLocalStorage = localStorage.getItem("firstName");
  }

  useEffect(() => {
    if (isValidToken) {
      // So the token is present and valid, do I have the user details?
      if (!firstNameLocalStorage) {
        dispatch(fetchUserInfo());
      }
    }
  
    if (isValidToken) {
       localStorage.setItem("token", token);
    }
   }, [isValidToken]);

  const onClick = () => {
    setVisible(true);
  };

  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation="overlay"
        direction="right"
        icon="labeled"
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
      >
        <Menu.Item>
          <Icon
            link
            name="home"
            onClick={() => {
              window.location = "/";
            }}
          />
          <a href="/">{t('home')}</a>
        </Menu.Item>
        {isValidToken ?
        (<Menu.Item>
          <Link href="/profile/">
            <Icon link name="user" />
          </Link>
          {(typeof window !== 'undefined') ? localStorage.getItem("firstName") : ''}
        </Menu.Item>) : 
        (<Menu.Item>
          <Link href="/connect/">
            <Icon link name="user" />
          </Link>
          {t('connect')}
        </Menu.Item>)
        }
      </Sidebar>

      <Sidebar.Pusher dimmed={visible}>
        <Segment basic>
          <Main onClick={onClick} isValidToken={isValidToken}/>
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}

SlideOutSidebar.propTypes = {
  t: PropTypes.func.isRequired
};

export default flowRight(
  withTranslation(['common'])
)(SlideOutSidebar);