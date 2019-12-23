import React, { Component } from "react";
import { Link } from "react-router-dom";

class EmptyPage extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="empty-page">
        <h1>{children}</h1>
        <p>
          Вернуться на <Link to="/">главную</Link>
        </p>
      </div>
    );
  }
}

export default EmptyPage;
