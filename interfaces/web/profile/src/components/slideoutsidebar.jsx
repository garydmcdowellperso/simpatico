import React, { useState } from "react";
import Link from "next/link";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import flowRight from 'lodash/flowRight';

import Main from "./Main";
import nextI18NextInstance from '../../i18n';
import { getCurrentLang } from '../lib/utils';

const { withTranslation } = nextI18NextInstance;

const SlideOutSidebar = (props) => {
  const { debate, t } = props;

  const [visible, setVisible] = useState(false);

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
        {debate.themes ? debate.themes.map((theme,idx) => {
          return (
            <Menu.Item key={idx}>
              <Icon link name="talk" />
              <Link href={theme.module ? `/thread/?module=${theme.module}` : null}><a>{theme.title[getCurrentLang()]} </a></Link>
            </Menu.Item>
          )
        }) : null}
        <Menu.Item>
          <Icon link name="power off" />
          {(typeof window !== 'undefined') && localStorage.getItem("firstName") ? t('logout') : ''}
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
