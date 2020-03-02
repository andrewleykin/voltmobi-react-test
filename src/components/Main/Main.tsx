import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import ItemList from "../ItemList";
import "./Main.css";
import { ComponentProps } from "./types";

const Main: React.FC<ComponentProps> = ({ items, fetchItems }) => {
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

export default Main;
