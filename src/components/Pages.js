import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import ListItem from "./ListItem";

class Pages extends React.Component {
  state = {
    pageConf: {
      itemCount: 0,
      perPage: 5,
      pageCount: Math.floor(
        (pageConf.itemCount + pageConf.perPage - 1) / pageConf.perPage
      )
    }
  };

  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  createPagination = (itemCount, perPage) => {
    let pageCount = Math.floor((itemCount + perPage - 1) / perPage);
    return { itemCount, perPage, pageCount };
  };

  renderPages = () => {
    const pagination = this.state.pageConf;
    const pages = [];

    for (let i = 0; i < pagination.pageCount; i++) {
      pages.push(
        <div style={{ border: "1px solid red" }} key={`page-${i}`}>
          {renderPosts(i)}
        </div>
      );
    }

    return pages;
  };

  renderPosts = page => {
    let perPage = page + this.state.pageConf.perPage;
    let postArr = [];

    for (i = page; i < perPage; i++) {
      let post = this.props.posts[i];

      postArr.push(
        <div key={i}>
          <ListItem
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        </div>
      );
    }

    return postArr;
    /*
    return this.props.posts.map((post, index) => {
      if (index <) {
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
      }
    });*/
  };

  renderPageButtons() {
    console.log(this.props);

    let pagination = this.createPagination(this.props.posts.length, 5);

    return this.props.posts.map((post, index) => {
      if (index < pagination.pageCount) {
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
  }

  render() {
    return (
      <React.Fragment>
        <div className="pageholder">{this.renderPages()}</div>
        <div className="ui celled horizontal list">
          {this.renderPageButtons()}
        </div>
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
