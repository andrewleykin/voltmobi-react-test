import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Sidebar from "../Sidebar";
import ItemList from "../ItemList";
import "./Main.css";

const Main = ({ items, fetchItems }) => {
  useEffect(() => {
    if (items.length === 0) fetchItems();
  }, [items.length, fetchItems]);
  return (
    <div className="main-page">
      <div className="container main-page__wrap">
        <Sidebar />
        <ItemList items={items} />
      </div>
    </div>
  );
};

Main.propTypes = {
  items: PropTypes.array.isRequired,
  fetchItems: PropTypes.func.isRequired
};

export default Main;
