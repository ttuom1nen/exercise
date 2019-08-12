import React from "react";
import { fetchUser } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UserInfo extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  render() {
    const { user } = this.props;

    return (
      <React.Fragment>
        <div
          className="ui segment center aligned"
          style={{ marginTop: "25px" }}
        >
          <div style={{ marginBottom: "20px" }}>
            <img
              src="img/placeholder.png"
              alt="Post thumbnail"
              style={{ height: "64px", width: "64px" }}
            />
            <h2>{user.name}</h2>
            <h4>{user.email}</h4>
            <h4>{user.phone}</h4>
          </div>

          <Link to="/">
            <button className="ui primary button">Back</button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => {
      return user.id == ownProps.match.params.id;
    })
  };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserInfo);
