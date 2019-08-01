import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import { switchMode } from "../actions";
import ListItem from "./ListItem";
import GridItem from "./GridItem";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList = () => {
    console.log(this.props);

    if (this.props.mode === "grid") {
      return this.props.posts.map((post, index) => {
        return (
          <GridItem
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        );
      });
    }

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
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <button
            className="ui icon basic button"
            onClick={() => this.props.switchMode("list")}
          >
            <i className="list icon" />
          </button>
          <button
            className="ui icon basic button"
            onClick={() => this.props.switchMode("grid")}
          >
            <i className="th icon" />
          </button>
        </div>
        <div className="ui list">{this.renderList()}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts, mode: state.mode };
};

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers, switchMode }
)(PostList);
