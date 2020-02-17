import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import ItemList from "../ItemList";
import "./Main.css";

const Main = ({ items, fetchItems }) => {
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);
  return (
    <div className="main-page">
      <div className="container main-page__wrap">
        <Sidebar />
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default Main;
