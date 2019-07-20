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
        <div className="extra">
          <img
            src="img/placeholder.png"
            className="ui circular avatar image"
            alt="User thumbnail"
          />{" "}
          <UserHeader userId={props.userId} />
        </div>
      </div>
    </div>
  );
};

/*
<div className="content" key={props.id}>
<div className="item">
  <div className="ui small image">
    <img src="img/placeholder.png" alt="placeholder" />
  </div>

  <p className="header">{props.title}</p>
  <div className="meta" />
  <div className="description">
    <p>{props.body}</p>
  </div>
  <div className="extra">
    <img
      src="img/placeholder.png"
      className="ui circular avatar image"
      alt="tinyimg"
    />
    <UserHeader userId={props.userId} />
  </div>
</div>
</div>*/

export default ListItem;
