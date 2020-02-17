import React from "react";
import { Link } from "react-router-dom";

const EmptyPage = ({ children }) => (
  <div className="empty-page">
    <h1>{children}</h1>
    <p>
      Вернуться на <Link to="/">главную</Link>
    </p>
  </div>
);

export default EmptyPage;
