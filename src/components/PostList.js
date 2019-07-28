import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import ListItem from "./ListItem";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((post, index) => {
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
