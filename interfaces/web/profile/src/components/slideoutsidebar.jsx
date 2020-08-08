import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import flowRight from 'lodash/flowRight';
import { useDispatch, useSelector } from "react-redux";

import Main from "./Main";
import nextI18NextInstance from '../../i18n';
import { getCurrentLang } from '../lib/utils';

import { fetchUserInfo } from "../actions/auth";

const { withTranslation } = nextI18NextInstance;

function isSubdomain(url) {
  var regex = new RegExp(/^([a-z]+\:\/{2})?([\w-]+\.[\w-]+\.\w+)$/);

  return !!url.match(regex); // make sure it returns boolean
}

const SlideOutSidebar = (props) => {
  const { debate, t } = props;

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const { role, isValidToken, firstName } = useSelector(state => state.auth);

  const onClick = () => {
    setVisible(true);
  };

 // First time effect
  useEffect(() => {
      // We can only fetch all our data if we have requested our account info etc first
      dispatch(fetchUserInfo());
  }, []);

  useEffect(() => {
    if (isValidToken === false) {
      // Direct the user where
      if (isSubdomain(window.location.hostname)) {
        window.location.href = '/login/';
      } else {
        window.location.href = '/connect';
      }
    }
  }, [isValidToken]);

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
          {role === "administrator" ? (
          <Icon
            link
            name="home"
            onClick={() => {
              window.location = "/admin/";
            }}
          />
          <a href="/">{t('home')}</a>
          ) : (
            <Icon
            link
            name="home"
            onClick={() => {
              window.location = "/";
            }}
          />
          <a href="/">{t('home')}</a>
          )}
        </Menu.Item>
        {debate && debate.themes ? debate.themes.map((theme,idx) => {
          return (
            <Menu.Item key={idx}>
              <Icon link name="talk" />
              <Link href={theme.module ? `/thread/?module=${theme.module}` : null}><a>{theme.title[getCurrentLang()]} </a></Link>
            </Menu.Item>
          )
        }) : null}
        <Menu.Item>
          <Icon link name="power off" />
          {(typeof window !== 'undefined') && firstName ? t('logout') : ''}
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={visible}>
        <Segment basic>
          <Main onClick={onClick} />
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}

export default flowRight(
  withTranslation(['common'])
)(SlideOutSidebar);
