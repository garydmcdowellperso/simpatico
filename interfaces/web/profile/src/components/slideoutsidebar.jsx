import React, { useState } from "react";
import Link from "next/link";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";

import Main from "./main";

const SlideOutSidebar = () => {
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
          <a href="/">Home</a>
        </Menu.Item>
        <Menu.Item>
          <Icon link name="user" />
          {(typeof window !== 'undefined') ? localStorage.getItem("firstName") : ''}
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

export default SlideOutSidebar
