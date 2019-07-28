import React from "react";
import UserHeader from "./UserHeader";

const ListItem = props => {
  return (
    <div className="item" key={props.id}>
      <div className="ui small image">
        <img src="img/placeholder.png" alt="Post thumbnail" />
      </div>
      <div className="content">
        <a className="header" href="/">
          {props.title}
        </a>
        <div className="meta">
          <a href="/">Date</a>
          <a href="/">Category</a>
        </div>
        <div className="description">{props.body}</div>

        <UserHeader userId={props.userId} />
      </div>
    </div>
  );
};

export default ListItem;
