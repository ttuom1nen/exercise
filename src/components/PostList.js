import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import ListItem from "./ListItem";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    let perPage = 20;
    let pageCount = this.props.posts.length / perPage;

    console.log("pageCount: ", pageCount);

    return this.props.posts.map((post, index) => {
      if (index < perPage) {
        return (
          <ListItem
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        );
      }
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
