import React from "react";
import PropTypes from "prop-types";

const ItemWrap = ({ children }) => (
  <div className="item-page">
    <div className="container">{children}</div>
  </div>
);

ItemWrap.propTypes = {
  children: PropTypes.node.isRequired
};

export default ItemWrap;
