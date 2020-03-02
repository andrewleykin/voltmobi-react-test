import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header";
import Main from "../Main";
import Item from "../Item";
import Cart from "../Cart";

const App: React.FC = () => (
  <div className="app-wrapper">
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/item/:id" component={Item} />
      <Route path="/cart" component={Cart} />
    </Switch>
  </div>
);

export default App;
