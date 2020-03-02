import React, { ReactChild } from "react";
import { Link } from "react-router-dom";

type ComponentProps = {
  children: ReactChild;
};

const EmptyPage: React.FC<ComponentProps> = ({ children }) => (
  <div className="empty-page">
    <h1>{children}</h1>
    <p>
      Вернуться на <Link to="/">главную</Link>
    </p>
  </div>
);

export default EmptyPage;
