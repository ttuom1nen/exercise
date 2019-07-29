import React from "react";
import UserHeader from "./UserHeader";

const GridItem = props => {
  const cardStyle = {
    display: "inline-block",
    margin: "2%"
  };

  const extraStyle = {
    height: "50px"
  };

  const contentStyle = {
    height: "200px",
    overflow: "hidden"
  };

  return (
    <div className="ui card" style={cardStyle}>
      <div className="image">
        <img src="img/placeholder.png" alt="Post thumbnail" />
      </div>
      <div className="content" style={contentStyle}>
        <a className="header">{props.title}</a>
        <div className="meta">
          <span className="date">Joined in 2013</span>
        </div>
        <div className="description">{props.body}</div>
      </div>
      <div className="extra content" style={extraStyle}>
        <UserHeader userId={props.userId} />
      </div>
    </div>
  );
};

export default GridItem;
