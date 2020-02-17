import React from "react";
import ItemWrap from "./ItemWrap";
import EmptyPage from "../EmptyPage";

const ItemEmpty = () => (
  <ItemWrap>
    <EmptyPage>Такого товара нету</EmptyPage>
  </ItemWrap>
);

export default ItemEmpty;
