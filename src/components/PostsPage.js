import React, { Component } from "react";
import PostList from "./PostList";

export default class PostsPage extends Component {
  createPagination(itemCount, perPage, pageCount) {
    let pageCount = Math.floor((itemCount + perPage - 1) / perPage);

    return { itemCount, perPage, pageCount };
  }

  renderPostList() {
    return false;
  }

  render() {
    return <div style={{ border: "1px solid red" }} />;
  }
}
