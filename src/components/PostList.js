import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import ListItem from "./ListItem";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  createPagination = (itemCount, perPage) => {
    let pageCount = Math.floor((itemCount + perPage - 1) / perPage);

    return { itemCount, perPage, pageCount };
  };

  renderList() {
    console.log(this.props);

    /*
    let itemCount = this.props.posts.length;
    console.log("TCL: PostList -> renderList -> itemCount", itemCount);
    let perPage = 5;
    console.log("TCL: PostList -> renderList -> perPage", perPage);
    let pageCount = Math.floor((itemCount + perPage - 1) / perPage);
    console.log("TCL: PostList -> renderList -> pageCount", pageCount);*/

    let pagination = this.createPagination(this.props.posts.length, 5);

    return this.props.posts.map((post, index) => {
      //let borderStyle = {}; style={borderStyle}

      if (index % pagination.perPage === 0) {
        //borderStyle = { border: "1px solid red" };
      } else {
        //borderStyle = { border: "1px solid blue" };
      }

      return (
        <ListItem
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          userId={post.userId}
        />
      );
    });
  }

  render() {
    return <div className="ui relaxed divided items">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
