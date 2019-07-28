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

  createPages = () => {
    console.log(this.props);

    let pagination = this.createPagination(this.props.posts.length, 5);

    return this.props.posts.map((post, index) => {
      if (index < pagination.pageCount) {
        //if (index % pagination.perPage === 0) {
        return (
          <div key={"page-" + index}>
            <div>{this.renderList()}</div>
            <div className="item" key={"pageButton-" + index}>
              <button
                style={{
                  border: "none",
                  backgroundColor: "unset",
                  cursor: "pointer"
                }}
              >
                {index + 1}
              </button>
            </div>
          </div>
        );
      }

      return null;
    });
  };

  renderList = () => {
    console.log(this.props);

    let pagination = this.createPagination(this.props.posts.length, 5);

    return this.props.posts.map((post, index) => {
      let borderStyle = {};

      if (index % pagination.perPage === 0) {
        borderStyle = { border: "1px solid red" };
      } else {
        borderStyle = { border: "1px solid blue" };
      }

      return (
        <div style={borderStyle} key={index}>
          <ListItem
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="ui relaxed divided items" />
        <div className="ui celled horizontal list">{this.createPages()}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
