import React from "react";
import UserHeader from "./UserHeader";

const ListItem = props => {
  return (
    <div className="ui grid" key={props.id}>
      <div
        className="one wide column"
        style={{ minWidth: "64px", margin: "6px" }}
      >
        <img
          src="img/placeholder.png"
          alt="Post thumbnail"
          style={{ height: "64px", width: "64px" }}
        />
      </div>
      <div className="eight wide column" style={{ minWidth: "280px" }}>
        <div className="content">
          <a className="header" href="/">
            {props.title}
          </a>
          <div className="meta">
            <span style={{ margin: "2px" }}>Date</span>
            <span style={{ margin: "2px" }}>Category</span>
          </div>
          <div className="description" style={{ marginBottom: "4px" }}>
            {props.body}
          </div>

          <UserHeader userId={props.userId} />
        </div>
      </div>
    </div>
  );
};

/*
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

*/

export default ListItem;
