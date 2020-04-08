import React from "react";
import PropTypes from "prop-types";
import { NavItem } from "shards-react";
import Link from 'next/link'

const SidebarNavItem = ({ item }) => (
  <NavItem>
    <Link href={item.to}>
      <a className="nav-link">
        <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
        />
        {item.title && <span>{item.title}</span>}
      </a>
    </Link>
  </NavItem>
);

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
};

export default SidebarNavItem;
