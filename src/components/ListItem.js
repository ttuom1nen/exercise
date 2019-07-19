import React, { Component } from "react";
import UserHeader from "./UserHeader";

const ListItem = props => {
  return (
    <div className="ui segment grid" key={props.id}>
      <div className="row">
        <div className="two wide middle aligned column">
          <i className="icon user" style={{ fontSize: "2em" }} />
        </div>
        <div className="fourteen wide column">
          <div className="content">
            <div className="description">
              <h3>{props.title}</h3>
              <p>{props.body}</p>
            </div>
            <UserHeader userId={props.userId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
