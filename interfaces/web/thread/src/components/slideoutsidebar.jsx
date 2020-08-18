import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import flowRight from 'lodash/flowRight';
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import Main from "./main";
import nextI18NextInstance from '../../i18n';
import { fetchUserInfo } from "../actions/auth";
import ErrorBoundary from './ErrorBoundary';

const { withTranslation } = nextI18NextInstance;

const SlideOutSidebar = ({ isValidToken, t }) => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter()

  const { firstName, token } = useSelector(state => state.auth);

  console.log('isValidToken', isValidToken)
  useEffect(() => {
    if (isValidToken) {
      dispatch(fetchUserInfo());
    }
  
    // Token not valid - back to login chaps
    if (isValidToken === false) {
      if (typeof window !== 'undefined') {
        window.location.href = `/login/?next=thread/?module=${router.query.module}`;
      }
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
          {firstName ? firstName : ''}
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
          <ErrorBoundary>
            <Main onClick={onClick} isValidToken={isValidToken}/>
          </ErrorBoundary>
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